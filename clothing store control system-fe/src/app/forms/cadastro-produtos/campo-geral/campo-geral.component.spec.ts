import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoGeralComponent } from './campo-geral.component';

describe('CampoGeralComponent', () => {
  let component: CampoGeralComponent;
  let fixture: ComponentFixture<CampoGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
