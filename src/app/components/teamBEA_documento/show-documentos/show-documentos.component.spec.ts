import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocumentosComponent } from './show-documentos.component';

describe('ShowDocumentosComponent', () => {
  let component: ShowDocumentosComponent;
  let fixture: ComponentFixture<ShowDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDocumentosComponent]
    });
    fixture = TestBed.createComponent(ShowDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
