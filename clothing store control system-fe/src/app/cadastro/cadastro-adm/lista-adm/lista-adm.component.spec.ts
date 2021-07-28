import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdmComponent } from './lista-adm.component';

describe('ListaAdmComponent', () => {
  let component: ListaAdmComponent;
  let fixture: ComponentFixture<ListaAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
