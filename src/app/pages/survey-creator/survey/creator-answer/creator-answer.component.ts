import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Answer } from 'src/app/models/survey/answer';
import { Question } from 'src/app/models/survey/question';

@Component({
  selector: 'app-survey-creator-answer',
  templateUrl: './creator-answer.component.html',
  styleUrls: ['./creator-answer.component.scss']
})
export class CreatorAnswerComponent implements OnInit
{
  @Output()
  public answerOrderedToDelete = new EventEmitter<Answer>();

  @Input()
  private answer: Answer;
  @Input()
  private editableAnswer: boolean;
  private QuestionTYPES = Question.TYPES;
  
  constructor()
  {
  }

  ngOnInit()
  {
  }

  onRemoveAnswerClick()
  {
    this.answerOrderedToDelete.emit(this.answer);
  }
}
