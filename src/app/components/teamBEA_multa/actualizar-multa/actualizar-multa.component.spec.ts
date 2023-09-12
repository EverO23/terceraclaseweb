import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMultaComponent } from './actualizar-multa.component';

describe('ActualizarMultaComponent', () => {
  let component: ActualizarMultaComponent;
  let fixture: ComponentFixture<ActualizarMultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarMultaComponent]
    });
    fixture = TestBed.createComponent(ActualizarMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
