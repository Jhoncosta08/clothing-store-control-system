import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioVendedoresComponent } from './relatorio-vendedores.component';

describe('RelatorioVendedoresComponent', () => {
  let component: RelatorioVendedoresComponent;
  let fixture: ComponentFixture<RelatorioVendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioVendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
