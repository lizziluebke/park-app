import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewParksComponent } from './new-parks/new-parks.component';

import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    NewParksComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
