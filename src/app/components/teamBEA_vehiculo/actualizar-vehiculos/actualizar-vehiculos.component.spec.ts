import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarVehiculosComponent } from './actualizar-vehiculos.component';

describe('ActualizarVehiculosComponent', () => {
  let component: ActualizarVehiculosComponent;
  let fixture: ComponentFixture<ActualizarVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarVehiculosComponent]
    });
    fixture = TestBed.createComponent(ActualizarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
