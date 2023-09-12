import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMultaComponent } from './show-multa.component';

describe('ShowMultaComponent', () => {
  let component: ShowMultaComponent;
  let fixture: ComponentFixture<ShowMultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMultaComponent]
    });
    fixture = TestBed.createComponent(ShowMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
