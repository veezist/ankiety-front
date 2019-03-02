import { Component, OnInit, Input } from '@angular/core';
import { CreatorAnswerComponent } from '../creator-answer/creator-answer.component';
import { Question } from 'src/app/models/survey/question';
import { Answer } from 'src/app/models/survey/answer';

@Component({
  selector: 'app-creator-survey-question',
  templateUrl: './creator-question.component.html',
  styleUrls: ['./creator-question.component.scss']
})
export class CreatorQuestionComponent implements OnInit
{
	@Input()
	public question: Question;

	private QuestionTYPES = Question.TYPES;

	constructor() { }

	ngOnInit() 
	{
	}

	onAddAnswerButtonClicked()
	{
		const newAnswer = new Answer();
		newAnswer.type = this.question.type;

		this.question.answers.push(newAnswer);
	}

	onAnswerOrederedToDelete(answerToDelete: Answer)
	{
		const index = this.question.answers.indexOf(answerToDelete);
    this.question.answers.splice(index, 1);
	}
}
