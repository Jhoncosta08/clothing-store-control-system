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
  selector: 'app-adicionar-vendedor',
  templateUrl: './adicionar-vendedor.component.html',
  styleUrls: ['./adicionar-vendedor.component.css']
})
export class AdicionarVendedorComponent implements OnInit {

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
