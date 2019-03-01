import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/models/survey/answer';
import { Question } from 'src/app/models/survey/question';

@Component({
  selector: 'app-survey-creator-answer',
  templateUrl: './creator-answer.component.html',
  styleUrls: ['./creator-answer.component.scss']
})
export class CreatorAnswerComponent implements OnInit
{
  @Input() 
  public answerType: string;
  @Input()
  public emiter = new EventEmitter();

  @Input()
  private answer: Answer;
  private QuestionTYPES = Question.TYPES;
  
  constructor()
  {
  }

  ngOnInit()
  {
  }

  onRemoveAnswerClick()
  {
    this.emiter.emit();
  }
}
