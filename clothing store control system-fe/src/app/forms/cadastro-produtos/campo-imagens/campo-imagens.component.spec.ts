import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoImagensComponent } from './campo-imagens.component';

describe('CampoImagensComponent', () => {
  let component: CampoImagensComponent;
  let fixture: ComponentFixture<CampoImagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoImagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
