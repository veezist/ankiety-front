import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit
{
  @Input() answerType: string;
  private answerTypeCopy: string;

  constructor()
  {
  }

  ngOnInit()
  {
    this.answerTypeCopy = this.answerType.toString();

    console.log(this.answerTypeCopy);
  }
}
