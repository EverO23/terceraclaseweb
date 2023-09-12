import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMultaComponent } from './delete-multa.component';

describe('DeleteMultaComponent', () => {
  let component: DeleteMultaComponent;
  let fixture: ComponentFixture<DeleteMultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMultaComponent]
    });
    fixture = TestBed.createComponent(DeleteMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
