import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultaComponent } from './add-multa.component';

describe('AddMultaComponent', () => {
  let component: AddMultaComponent;
  let fixture: ComponentFixture<AddMultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMultaComponent]
    });
    fixture = TestBed.createComponent(AddMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
