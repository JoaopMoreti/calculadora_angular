import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CalculadoramoduleModule} from './calculadoramodule'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoramoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
