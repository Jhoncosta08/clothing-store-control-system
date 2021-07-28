import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoVariacaoComponent } from './campo-variacao.component';

describe('CampoVariacaoComponent', () => {
  let component: CampoVariacaoComponent;
  let fixture: ComponentFixture<CampoVariacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoVariacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoVariacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
