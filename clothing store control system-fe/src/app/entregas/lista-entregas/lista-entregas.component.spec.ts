import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntregasComponent } from './lista-entregas.component';

describe('ListaEntregasComponent', () => {
  let component: ListaEntregasComponent;
  let fixture: ComponentFixture<ListaEntregasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEntregasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntregasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
