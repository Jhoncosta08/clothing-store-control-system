import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVariacoesComponent } from './lista-variacoes.component';

describe('ListaVariacoesComponent', () => {
  let component: ListaVariacoesComponent;
  let fixture: ComponentFixture<ListaVariacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVariacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVariacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
