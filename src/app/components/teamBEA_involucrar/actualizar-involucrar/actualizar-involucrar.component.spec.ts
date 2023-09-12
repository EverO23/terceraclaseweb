import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInvolucrarComponent } from './actualizar-involucrar.component';

describe('ActualizarInvolucrarComponent', () => {
  let component: ActualizarInvolucrarComponent;
  let fixture: ComponentFixture<ActualizarInvolucrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarInvolucrarComponent]
    });
    fixture = TestBed.createComponent(ActualizarInvolucrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
