import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SurveySavedDialogComponent } from './survey-saved-dialog/survey-saved-dialog.component';
import { CreatorQuestionComponent } from './survey/creator-question/creator-question.component';
import { Question } from '../../models/survey/question';

@Component({
	selector: 'app-survey-creator',
	templateUrl: './survey-creator.component.html',
	styleUrls: ['./survey-creator.component.scss']
})
export class SurveyCreatorComponent implements OnInit
{
	private questions: Array<Question> = [];

	constructor(private dialog: MatDialog) { }

	ngOnInit()
	{
	}

onPublishSurveyButtonClick()
	{
		this.dialog.open(SurveySavedDialogComponent);
	}

	onAddFirstQuestionButtonClick()
	{
		this.questions.push(new Question());
	}

	onSaveSurveyButtonClicked()
	{
		this.dialog.open(SurveySavedDialogComponent);
	}

	onDeleteSurveyButtonClick()
	{
		this.questions = [];
	}

	onAddQuestionBelowButtonClick()
	{
		this.questions.push(new Question());
	}

	onAddQuestionAboveButtonClick(index: any)
	{
		this.questions.splice(index, 0, new Question());
	}

	onDeleteQuestionButtonClick(index: any)
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
