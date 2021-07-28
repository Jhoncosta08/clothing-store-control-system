import { Component, OnInit } from '@angular/core';

interface Cargo {
  value: string;
  viewValue: string;
} 

interface Sexo{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-adicionar-adm',
  templateUrl: './adicionar-adm.component.html',
  styleUrls: ['./adicionar-adm.component.css']
})
export class AdicionarAdmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cargo: Cargo[] = [
    {value: 'Administrador', viewValue: 'Administrador'},
    {value: 'Atendente', viewValue: 'Atendente'}
  ];

  sexo: Sexo[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Feminino', viewValue: 'Feminino'}
  ];

}
