import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSurveyItemComponent } from './panel-survey-item.component';

describe('PanelSurveyItemComponent', () => {
  let component: PanelSurveyItemComponent;
  let fixture: ComponentFixture<PanelSurveyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSurveyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSurveyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
