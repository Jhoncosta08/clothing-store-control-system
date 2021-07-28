import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarPausarCaixaComponent } from './iniciar-pausar-caixa.component';

describe('IniciarPausarCaixaComponent', () => {
  let component: IniciarPausarCaixaComponent;
  let fixture: ComponentFixture<IniciarPausarCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarPausarCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarPausarCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
