import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorAnswerComponent } from './creator-answer.component';

describe('CreatorAnswerComponent', () => {
  let component: CreatorAnswerComponent;
  let fixture: ComponentFixture<CreatorAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
