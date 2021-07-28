import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAdmComponent } from './adicionar-adm.component';

describe('AdicionarAdmComponent', () => {
  let component: AdicionarAdmComponent;
  let fixture: ComponentFixture<AdicionarAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
