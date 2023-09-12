import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInvolucrarComponent } from './show-involucrar.component';

describe('ShowInvolucrarComponent', () => {
  let component: ShowInvolucrarComponent;
  let fixture: ComponentFixture<ShowInvolucrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowInvolucrarComponent]
    });
    fixture = TestBed.createComponent(ShowInvolucrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
