import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SurveySavedDialogComponent } from './survey-saved-dialog/survey-saved-dialog.component';
import { CreatorQuestionComponent } from './survey/creator-question/creator-question.component';
import { Question } from '../../models/survey/question';
import { Answer } from 'src/app/models/survey/answer';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-survey-creator',
	templateUrl: './survey-creator.component.html',
	styleUrls: ['./survey-creator.component.scss']
})
export class SurveyCreatorComponent implements OnInit
{
	private questions: Array<Question> = [];
	private QuestionTYPES = Question.TYPES;
	listTwo: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];

	constructor(private dialog: MatDialog) { }

	ngOnInit()
	{
	}

	logSth()
	{
		// console.log(this.questions);
	}

	onPublishSurveyButtonClick()
	{
		this.dialog.open(SurveySavedDialogComponent);
	}

	onAddFirstQuestionButtonClick()
	{
		this.questions.push(new Question());
	}

	onQuestionTypeChange(event: { index: number, previousValue: string })
	{
		let index = event.index;

		this.questions[index].deleteAllAnswers();
		if (event.previousValue === this.QuestionTYPES.Condition)
		{
			// console.log('test');
			this.questions[index].conditionalQuestions = new Array<Array<Question>>();
		}
		
		if (this.questions[index].type === Question.TYPES.Text)
		{
			this.questions[index].addAnswer(Question.TYPES.Text);
		}
	}

	onConditionalQuestionTypeChange(event: { index: number, previousValue: string }, index: number)
	{
		let condIndex = event.index;
		let q = this.questions[index];
		let cQ = q.conditionalQuestions[q.selectedAnswerIndex][condIndex];
		
		cQ.deleteAllAnswers();
		
		if (cQ.type === Question.TYPES.Text)
		{
			cQ.addAnswer(Question.TYPES.Text);
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
		if (this.questions[questionIndex].type === Question.TYPES.Condition)
		{
			if (this.questions[questionIndex].selectedAnswerIndex !== undefined)
			{
				this.questions[questionIndex].addConditionalQuestion(new Question(Question.TYPES.Text));
			}
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

	onDeleteCondoQuestionButtonClick(index: number, condIndex: number)
	{
		let q = this.questions[index];
		let cQs = q.conditionalQuestions[q.selectedAnswerIndex];

		cQs.splice(condIndex, 1);
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

	dropQuestion(event: CdkDragDrop<string[]>)
	{
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
	}
	
	dropConditionalQuestion(event: CdkDragDrop<string[]>, question: Question)
	{
    moveItemInArray(question.conditionalQuestions[question.selectedAnswerIndex], event.previousIndex, event.currentIndex);
	}
	
	onAddNewCreatingSurveySquare()
	{
		let txt = $('<p>ankieta</p>').css('margin', '0')
									.css('text-align', 'center')
									.css('line-height', '10');
		let square = $('<div>').addClass("creating-survey-square").append(txt).appendTo('#creating-survey-square-container').hover(function() {
			$(this).addClass('mat-elevation-z6');
		},
		function(){
			$(this).removeClass('mat-elevation-z6');
		});

		// square
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
