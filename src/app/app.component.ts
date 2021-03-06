import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { locations } from './countries.data';
import { CODES } from './country-codes.data';

import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  locations = locations;
  countryKeys = Object.keys(this.locations);
  countries = this.countryKeys
    .map(cKey => {
      let data = this.locations[cKey]
        .map(l => {
          return {
            location: l.location,
            count: l.cnt,
            countLabel: l.cnt !== 1 ? 'заявления' : 'заявление',
            class: l.cnt >= 40 ? 'text-success' : 'text-danger'
          };
        })
        .filter(l => +l.count > 0);

      let count = this.locations[cKey].reduce(this.locationReducer, 0);
      let accumulated = {
        name: CODES[cKey] || cKey,
        code: cKey,
        flag: (cKey === 'UK' ? 'gb' : cKey).toLowerCase(),
        count,
        countLabel: count !== 1 ? 'заявления' : 'заявление',
        data
      };
      return accumulated;
    })
    // .filter(f => f.count)
    .sort((a, b) => b.count - a.count);

  total = this.countries.reduce((acc, curr) => acc + curr.count, 0);

  flatten = this.countries
    .filter(f => f.count)
    .reduce((acc, curr) => {
      return [
        ...acc,
        ...curr.data.map(d => {
          return { ...d, code: curr.code, name: curr.name, flag: curr.flag };
        })
      ];
    }, [])
    .sort((a, b) => b.count - a.count);

  topLocations = this.flatten.slice(0, 100);

  private locationReducer(acc, cur) {
    return acc + (cur.cnt || 0);
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: ''
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
