import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-creator-answer',
  templateUrl: './creator-answer.component.html',
  styleUrls: ['./creator-answer.component.scss']
})
export class CreatorAnswerComponent implements OnInit
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
