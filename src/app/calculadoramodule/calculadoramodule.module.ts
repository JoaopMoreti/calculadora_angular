import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoracomponentComponent } from './calculadoracomponent';
import { CalculadoraService } from './services';



@NgModule({
  declarations: [
    CalculadoracomponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoracomponentComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoramoduleModule { }
