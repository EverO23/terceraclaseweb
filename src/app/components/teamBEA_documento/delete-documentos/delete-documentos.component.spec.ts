import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDocumentosComponent } from './delete-documentos.component';

describe('DeleteDocumentosComponent', () => {
  let component: DeleteDocumentosComponent;
  let fixture: ComponentFixture<DeleteDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDocumentosComponent]
    });
    fixture = TestBed.createComponent(DeleteDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
