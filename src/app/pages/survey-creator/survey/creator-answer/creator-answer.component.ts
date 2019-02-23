import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/models/survey/answer';

@Component({
  selector: 'app-survey-creator-answer',
  templateUrl: './creator-answer.component.html',
  styleUrls: ['./creator-answer.component.scss']
})
export class CreatorAnswerComponent implements OnInit
{
  @Input() answerType: string;
  private answerTypeCopy: string;

  @Input()
  private answer: Answer;
  
  @Input()
  public emiter = new EventEmitter();

  constructor()
  {
  }

  ngOnInit()
  {
    this.answerTypeCopy = this.answerType.toString();

    console.log(this.answerTypeCopy);
  }

  onRemoveAnswerClick()
  {
    this.emiter.emit();
  }
}
