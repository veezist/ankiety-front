import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/models/survey/question';

@Component({
  selector: 'app-creator-question-container',
  templateUrl: './creator-question-container.component.html',
  styleUrls: ['./creator-question-container.component.scss']
})
export class CreatorQuestionContainerComponent implements OnInit
{
  @Input()
  private question: Question;
  @Input()
  private idx: number;

  @Output()
  private questionTypeChange = new EventEmitter<number>();
  @Output()
  private addQuestionBelowButtonClick = new EventEmitter<number>();
  @Output()
  private addQuestionAboveButtonClick = new EventEmitter<number>();
  @Output()
  private deleteQuestionButtonClick = new EventEmitter<number>();

  private QuestionTYPES = Question.TYPES;

  constructor() { }

  ngOnInit()
  {
  }

  private onQuestionTypeChange(idx: number)
  {
    this.questionTypeChange.emit(idx);
  }

  private onAddQuestionBelowButtonClick(idx: number)
  {
    this.addQuestionBelowButtonClick.emit(idx);
  }
  private onAddQuestionAboveButtonClick(idx: number)
  {
    this.addQuestionAboveButtonClick.emit(idx);
  }
  private onDeleteQuestionButtonClick(idx: number)
  {
    this.deleteQuestionButtonClick.emit(idx);
  }
}
