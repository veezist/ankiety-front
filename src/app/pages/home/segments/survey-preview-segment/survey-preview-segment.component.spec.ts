import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPreviewSegmentComponent } from './survey-preview-segment.component';

describe('SurveyPreviewSegmentComponent', () => {
  let component: SurveyPreviewSegmentComponent;
  let fixture: ComponentFixture<SurveyPreviewSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPreviewSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPreviewSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
