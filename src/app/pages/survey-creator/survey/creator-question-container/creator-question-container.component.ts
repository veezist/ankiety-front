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
  private editableSurvey: boolean;
  @Input()
  private question: Question;
  @Input()
  private isConditional: boolean;
  @Input()
  private idx: number;

  @Output()
  private questionTypeChange = new EventEmitter<Object>();
  @Output()
  private addQuestionBelowButtonClick = new EventEmitter<number>();
  @Output()
  private addQuestionAboveButtonClick = new EventEmitter<number>();
  @Output()
  private deleteQuestionButtonClick = new EventEmitter<number>();

  private QuestionTYPES = Question.TYPES;
  private qusetionTypeDelay;

  constructor() { }

  ngOnInit()
  {
    this.qusetionTypeDelay = this.question.type;
  }

  private onQuestionTypeChange(idx: number)
  {
    this.questionTypeChange.emit({ index: idx, previousValue: this.qusetionTypeDelay });
    this.qusetionTypeDelay = this.question.type;
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

  private printIndex()
  {
    // console.log(this.idx);
  }
}
