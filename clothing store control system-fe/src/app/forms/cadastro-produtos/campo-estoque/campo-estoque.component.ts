import { Component, OnInit } from '@angular/core';

interface Visivel{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-campo-estoque',
  templateUrl: './campo-estoque.component.html',
  styleUrls: ['./campo-estoque.component.css']
})
export class CampoEstoqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visivel: Visivel[] = [
    {value: 'Sim', viewValue: 'Sim'},
    {value: 'Não', viewValue: 'Não'},
  ];

}
