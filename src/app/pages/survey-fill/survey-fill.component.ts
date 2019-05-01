import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/survey/question';

@Component({
	selector: 'app-survey-fill',
	templateUrl: './survey-fill.component.html',
	styleUrls: ['./survey-fill.component.scss']
})
export class SurveyFillComponent implements OnInit
{	
	private questions: Array<Question> = [];
	private QuestionTYPES = Question.TYPES;

	constructor() { }
	
	ngOnInit()
	{
		let q0 = new Question();
		q0.text = "Co sądzisz o systemie eNego?";
		this.questions.push(q0);
		let q = new Question(this.QuestionTYPES.OneOfN);
		q.text = "Are you sure?";
		q.addAnswer(this.QuestionTYPES.OneOfN);
		q.addAnswer(this.QuestionTYPES.OneOfN);
		this.questions.push(q);
		this.questions.push(new Question());
		this.questions.push(new Question());
		
		let cq = new Question(Question.TYPES.Condition);
		cq.addAnswer(Question.TYPES.OneOfN);
		cq.addAnswer(Question.TYPES.OneOfN);
		cq.addConditionalQuestion(new Question(Question.TYPES.Text));
		cq.addConditionalQuestionAtIndex(new Question(Question.TYPES.Text), 1);
		// cq.addConditionalQuestionAtIndex(new Question(Question.TYPES.Text), 0);
		// cq.addConditionalQuestionAtIndex(new Question(Question.TYPES.Text), 1);

		this.questions.push(cq);

		console.log(this.questions);
	}
}
