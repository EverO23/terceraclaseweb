import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehiculosComponent } from './show-vehiculos.component';

describe('ShowVehiculosComponent', () => {
  let component: ShowVehiculosComponent;
  let fixture: ComponentFixture<ShowVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowVehiculosComponent]
    });
    fixture = TestBed.createComponent(ShowVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
