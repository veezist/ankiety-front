import { Component, OnInit } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'app-survey-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit
{
	private answerTypes: Array<string> = ["1 z N", "tesktowa"]; 
	private answers: Array<AnswerComponent> = [];

	constructor() { }

	ngOnInit() 
	{
	}

	onAddAnswerButtonClicked(selectedType: any)
	{
		console.log('question: ' + selectedType);

		if (selectedType !== undefined)
		{
			this.answers.push(new AnswerComponent());
		}
	}
}
