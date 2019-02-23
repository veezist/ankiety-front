import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorQuestionComponent } from './creator-question.component';

describe('CreatorQuestionComponent', () => {
  let component: CreatorQuestionComponent;
  let fixture: ComponentFixture<CreatorQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
