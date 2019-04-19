import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsQuestionTypesSegmentComponent } from './statistics-question-types-segment.component';

describe('StatisticsQuestionTypesSegmentComponent', () => {
  let component: StatisticsQuestionTypesSegmentComponent;
  let fixture: ComponentFixture<StatisticsQuestionTypesSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsQuestionTypesSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsQuestionTypesSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
