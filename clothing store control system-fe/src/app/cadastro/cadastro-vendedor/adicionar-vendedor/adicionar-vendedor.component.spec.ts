import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarVendedorComponent } from './adicionar-vendedor.component';

describe('AdicionarVendedorComponent', () => {
  let component: AdicionarVendedorComponent;
  let fixture: ComponentFixture<AdicionarVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
