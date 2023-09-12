import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonaComponent } from './show-persona.component';

describe('ShowPersonaComponent', () => {
  let component: ShowPersonaComponent;
  let fixture: ComponentFixture<ShowPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPersonaComponent]
    });
    fixture = TestBed.createComponent(ShowPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
