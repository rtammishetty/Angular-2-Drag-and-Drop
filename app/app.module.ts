import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {EJ_GRID_COMPONENTS } from './ej/grid.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,EJ_GRID_COMPONENTS ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  
}