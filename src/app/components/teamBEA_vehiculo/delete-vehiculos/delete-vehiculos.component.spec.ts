import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVehiculosComponent } from './delete-vehiculos.component';

describe('DeleteVehiculosComponent', () => {
  let component: DeleteVehiculosComponent;
  let fixture: ComponentFixture<DeleteVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteVehiculosComponent]
    });
    fixture = TestBed.createComponent(DeleteVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
