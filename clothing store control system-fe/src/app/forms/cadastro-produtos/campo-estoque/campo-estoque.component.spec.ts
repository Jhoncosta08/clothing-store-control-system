import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoEstoqueComponent } from './campo-estoque.component';

describe('CampoEstoqueComponent', () => {
  let component: CampoEstoqueComponent;
  let fixture: ComponentFixture<CampoEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
