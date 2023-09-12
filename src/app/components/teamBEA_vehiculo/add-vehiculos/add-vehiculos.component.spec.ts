import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiculosComponent } from './add-vehiculos.component';

describe('AddVehiculosComponent', () => {
  let component: AddVehiculosComponent;
  let fixture: ComponentFixture<AddVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVehiculosComponent]
    });
    fixture = TestBed.createComponent(AddVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
