import { Component, OnInit, Input } from '@angular/core';
import { CreatorAnswerComponent } from '../creator-answer/creator-answer.component';
import { Question } from 'src/app/models/survey/question';
import { Answer, answerTypes } from 'src/app/models/survey/answer';

@Component({
  selector: 'app-creator-survey-question',
  templateUrl: './creator-question.component.html',
  styleUrls: ['./creator-question.component.scss']
})
export class CreatorQuestionComponent implements OnInit
{
	@Input()
	public question: Question;

	private answerTypes: string[] = answerTypes;
	private selectedAnswerType: string = 'xd';
	/* private answers: Array<CreatorAnswerComponent> = []; */

	constructor() { }

	ngOnInit() 
	{
	}

	onAddAnswerButtonClicked(selectedType: string)
	{
		/* console.log('question: ' + selectedType); */

		/* if (selectedType !== undefined)
		{
			const newAnswer = new Answer();
			newAnswer.type = selectedType;

			this.question.answers.push(newAnswer);
		} */
		const newAnswer = new Answer();
			newAnswer.type = '1ofn';

			this.question.answers.push(newAnswer);
	}
}
