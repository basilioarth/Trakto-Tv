import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsPreviewComponent } from './designs-preview.component';

describe('DesignsPreviewComponent', () => {
  let component: DesignsPreviewComponent;
  let fixture: ComponentFixture<DesignsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
