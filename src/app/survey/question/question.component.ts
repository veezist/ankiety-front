import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit
{
  private answers: Array<string> = [];

  constructor() { }

  ngOnInit() 
  {
  }

  onAddAnswerButtonClicked()
  {
    this.answers.push('ala ma kota');
  }
}
