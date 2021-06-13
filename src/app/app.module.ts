import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TableViewComponent } from './table-view/table-view.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CountryComponent } from './country/country.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, TableViewComponent, CountryComponent],
  entryComponents: [AppComponent, CountryComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
