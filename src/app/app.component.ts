import { Component } from '@angular/core';
import { locations } from './countries.data';
import { CODES } from './country-codes.data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locations = locations;

  turkey = locations.TR;

  countryKeys = Object.keys(this.locations);
  countries = this.countryKeys
    .map(cKey => {
      let data = this.locations[cKey]
        .map(l => {
          return {
            location: l.location,
            count: l.cnt,
            countLabel:  l.cnt > 1 ? 'заявления' : 'заявление'
          };
        })
        .filter(l => +l.count > 0);
      //let accumulated = this.locations[cKey][0].cnt || 0;
      let count = this.locations[cKey].reduce(this.locationReducer, 0);
      let accumulated = {
        name: CODES[cKey] || cKey,
        code: cKey,
        flag: (cKey === 'UK' ? 'gb' : cKey).toLowerCase(),
        count,
        countLabel: count > 1 ? 'заявления' : 'заявление',
        data
      };
      return accumulated;
    })
    .sort((a, b) => b.count - a.count)
    .filter(f => f.count);

  total = this.countries.reduce((acc, curr) => acc + curr.count, 0);

  flatten = this.countries
    .reduce((acc, curr) => {
      return [
        ...acc,
        ...curr.data.map(d => {
          return { ...d, code: curr.code, name: curr.name, flag: curr.flag };
        })
      ];
    }, [])
    .sort((a, b) => b.count - a.count);

  top10 = this.flatten.slice(0, 100);

  private locationReducer(acc, cur) {
    return acc + (cur.cnt || 0);
  }
}
