import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadoracomponent',
  templateUrl: './calculadoracomponent.component.html',
  styleUrls: ['./calculadoracomponent.component.css']
})
export class CalculadoracomponentComponent implements OnInit {
  private res = 0

  constructor(private calculadoraservice:CalculadoraService) { }

  ngOnInit(): void {
  }
  somar(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    /*essas  variaveis vão servir para suprirem o parametro e armazenar os dados preenchidos neles.*/

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.calculadoraservice.somar(n1, n2);
  }

  subtrair(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.calculadoraservice.subtrair(n1, n2);
  }

  multiplicar(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.calculadoraservice.multiplicar(n1, n2);
  }

  dividir(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    /*essas  variaveis vão servir para suprirem o parametro e armazenar os dados preenchidos neles.*/

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.calculadoraservice.dividir(n1, n2);
  }

  get resultado(): string {
    return this.res.toString();
  }

}
