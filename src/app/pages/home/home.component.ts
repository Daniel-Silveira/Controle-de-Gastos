import { Component, OnInit } from '@angular/core';

export interface Values {
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent  implements OnInit {
  salario: number;
  gFixo: number;
  gAdc: number;
  vInv: number;
  valores: any;

  icon = 'keyboard_arrow_up';

  tables: Values[] = [
    {title: 'Gasto Fixo'},
    {title: 'Gasto Adicional'},
    {title: 'Valor Investimento'},
    {title: 'Valor Livre'}
  ];

  tablesNumber = [];

  ngOnInit(): void {

    this.valores = {
      gFixo: 771,
      gAdc: 0,
      vInv: 85
    };
  }

  calcular() {
    const lengthTable = this.tablesNumber.length;
    this.tablesNumber.splice(0, lengthTable);

    const gastoFixo = this.valores.gFixo;
    const gastoAdicional = this.valores.gAdc;
    const salario = this.salario - gastoFixo - gastoAdicional;
    const investimento = this.valores.vInv * salario / 100;
    const livre = salario - investimento;

    this.tablesNumber.push(
      {value: gastoFixo.toFixed(2)},
      {value: gastoAdicional.toFixed(2)},
      {value: investimento.toFixed(2)},
      {value: livre.toFixed(2)}
    );
    document.querySelector('.cont-info .none').classList.remove('none');
  }

  add() {
    console.log('add');
  }
 }
