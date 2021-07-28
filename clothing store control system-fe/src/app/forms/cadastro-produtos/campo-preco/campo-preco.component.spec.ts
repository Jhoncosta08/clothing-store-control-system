import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoPrecoComponent } from './campo-preco.component';

describe('CampoPrecoComponent', () => {
  let component: CampoPrecoComponent;
  let fixture: ComponentFixture<CampoPrecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoPrecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
