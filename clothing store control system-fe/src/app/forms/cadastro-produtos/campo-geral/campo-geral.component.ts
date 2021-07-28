import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

interface Categoria{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-campo-geral',
  templateUrl: './campo-geral.component.html',
  styleUrls: ['./campo-geral.component.css']
})
export class CampoGeralComponent implements OnInit {

  constructor() { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  ngOnInit(): void {
  }

  
  categoria: Categoria[] = [
    {value: 'Roupas', viewValue: 'Roupas'},
    {value: 'Sapatos', viewValue: 'Sapatos'},
    {value: 'Acessórios', viewValue: 'Acessórios'},
    {value: 'Outros', viewValue: 'Outros'}
  ];

}
