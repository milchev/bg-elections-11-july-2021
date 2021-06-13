import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() countries;
  set(_input) {
    this.countries = _input;
    this.total = _input.reduce((acc, curr) => acc + curr.count, 0);
  }
  @Output()
  openCountry = new EventEmitter();

  total = 0;
  constructor() {}

  ngOnInit() {}
  panelOpenState = false;

  trackByFn(index) {
    return index;
  }

  open(country) {
    this.openCountry.emit(country);
  }
}
