import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarVendaComponent } from './adicionar-venda.component';

describe('AdicionarVendaComponent', () => {
  let component: AdicionarVendaComponent;
  let fixture: ComponentFixture<AdicionarVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
