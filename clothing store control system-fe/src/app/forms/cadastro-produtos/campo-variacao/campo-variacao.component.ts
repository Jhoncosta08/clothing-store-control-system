import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface Variacao {
  value: string;
  viewValue: string;
}

interface variacaoGroup {
  disabled?: boolean;
  name: string;
  variacao: Variacao[];
}

interface Categoria{
  value: string;
  viewValue: string;
}

interface categoriaGroup {
  disabled?: boolean;
  name: string;
  categoria: Categoria[];
}


@Component({
  selector: 'app-campo-variacao',
  templateUrl: './campo-variacao.component.html',
  styleUrls: ['./campo-variacao.component.css']
})
export class CampoVariacaoComponent implements OnInit {

  variacaoControl = new FormControl();
  variacaoGroups: variacaoGroup[] = [
    {
      name: 'Cor',
      variacao: [
        {value: 'Preto', viewValue: 'preto'},
        {value: 'Vermelho', viewValue: 'Vermelho'},
        {value: 'Verde', viewValue: 'Verde'}
      ]
    },
    {
      name: 'Tamanho',
      variacao: [
        {value: 'P', viewValue: 'P'},
        {value: 'M', viewValue: 'M'},
        {value: 'G', viewValue: 'G'}
      ]
    },
  ];


  categoriaControl = new FormControl();
  categoriaGroups: categoriaGroup[] = [
    {
      name: 'Categorias',
      categoria: [
        {value: 'Camiseta', viewValue: 'Camiseta'},
        {value: 'Bermuda', viewValue: 'Bermuda'},
        {value: 'Calça', viewValue: 'calça'}
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
