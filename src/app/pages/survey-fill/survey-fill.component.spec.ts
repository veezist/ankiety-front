import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFillComponent } from './survey-fill.component';

describe('SurveyFillComponent', () => {
  let component: SurveyFillComponent;
  let fixture: ComponentFixture<SurveyFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
