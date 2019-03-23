import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorQuestionContainerComponent } from './creator-question-container.component';

describe('CreatorQuestionContainerComponent', () => {
  let component: CreatorQuestionContainerComponent;
  let fixture: ComponentFixture<CreatorQuestionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorQuestionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorQuestionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
