import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SurveySavedDialogComponent } from './survey-saved-dialog/survey-saved-dialog.component';
import { CreatorQuestionComponent } from './survey/creator-question/creator-question.component';
import { Question } from '../../models/survey/question';
import { Answer } from 'src/app/models/survey/answer';

@Component({
	selector: 'app-survey-creator',
	templateUrl: './survey-creator.component.html',
	styleUrls: ['./survey-creator.component.scss']
})
export class SurveyCreatorComponent implements OnInit
{
	private questions: Array<Question> = [];
	private QuestionTYPES = Question.TYPES;

	constructor(private dialog: MatDialog) { }

	ngOnInit()
	{
	}

	logSth()
	{
		console.log(this.questions);
	}

	onPublishSurveyButtonClick()
	{
		this.dialog.open(SurveySavedDialogComponent);
	}

	onAddFirstQuestionButtonClick()
	{
		this.questions.push(new Question());
	}

	onQuestionTypeChange(index: number)
	{
		this.questions[index].deleteAllAnswers();
		
		if (this.questions[index].type === Question.TYPES.Text)
		{
			this.questions[index].addAnswer(Question.TYPES.Text);
		}
	}

	onSaveSurveyButtonClicked()
	{
		this.dialog.open(SurveySavedDialogComponent);
	}

	onDeleteSurveyButtonClick()
	{
		this.questions = [];
	}

	onAddQuestionBelowButtonClick(questionIndex: number)
	{
		// console.log('this.questions.length === ', this.questions.length);
		// console.log('questionIndex === ', questionIndex);
		// this.questions.push(new Question(this.questions[this.questions.length - 1].type));
		if (this.questions[questionIndex].type === Question.TYPES.Condition)
		{
			this.questions[questionIndex].addConditionalQuestion(new Question(Question.TYPES.Text));
		}
		else
		{
			this.questions.splice(questionIndex + 1, 0, new Question(this.questions[questionIndex].type));
		}
	}

	onAddQuestionAboveButtonClick(index: any)
	{
		this.questions.splice(index, 0, new Question(this.questions[index].type));
	}

	onDeleteQuestionButtonClick(index: any)
	{
		this.questions.splice(index, 1);
	}

	onAddCondQuestionBelowButtonClick(upperQuestionIndex: number, questionIndex: number)
	{
		this.questions[upperQuestionIndex].addConditionalQuestionAtIndex(new Question(Question.TYPES.Text), questionIndex + 1);
	}

	onAddCondQuestionAboveButtonClick(upperQuestionIndex: number, questionIndex: number)
	{
		this.questions[upperQuestionIndex].addConditionalQuestionAtIndex(new Question(Question.TYPES.Text), questionIndex);
	}

	onDeleteCondQuestionButtonClick(index: any)
	{
		this.questions.splice(index, 1);
	}
}

/* import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	data = {
		companies: [
			{
				company: "example comany",
				projects: [
					{
						projectName: "example project",
					}
				]
			}
		]
	}

	myForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.myForm = this.fb.group({
			companies: this.fb.array([])
		})

		this.setCompanies();
	}

	addNewCompany() {
		let control = <FormArray>this.myForm.controls.companies;
		control.push(
			this.fb.group({
				company: [''],
				projects: this.fb.array([])
			})
		)
	}

	deleteCompany(index) {
		let control = <FormArray>this.myForm.controls.companies;
		control.removeAt(index)
	}

	addNewProject(control) {
		control.push(
			this.fb.group({
				projectName: ['']
			}))
	}

	deleteProject(control, index) {
		control.removeAt(index)
	}

	setCompanies() {
		let control = <FormArray>this.myForm.controls.companies;
		this.data.companies.forEach(x => {
			control.push(this.fb.group({ 
				company: x.company, 
				projects: this.setProjects(x) }))
		})
	}

	setProjects(x) {
		let arr = new FormArray([])
		x.projects.forEach(y => {
			arr.push(this.fb.group({ 
				projectName: y.projectName 
			}))
		})
		return arr;
	}
}

 */
