import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  country: any;
}

@Component({
  selector: 'fuk-country',
  templateUrl: 'country.component.html',
  styleUrls: ['country.component.css']
})
export class CountryComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {}
}
