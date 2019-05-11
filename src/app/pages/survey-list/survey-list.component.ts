import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SurveyHeader } from 'src/app/models/survey/survey-header';

export interface Category
{
	value: String,
	viewValue: String
}
export interface SortOption
{
	value: String,
	viewValue: String
}

@Component({
	selector: 'app-survey-list',
	templateUrl: './survey-list.component.html',
	styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {
	
	surveys: Array<SurveyHeader>;
	
	categories: Category[] = 
	[
		{ value: 'polityka', viewValue: 'polityka' },
		{ value: 'sport', 	 viewValue: 'sport' },
		{ value: 'nauka',	 viewValue: 'nauka' }
	];

	sortOptions: SortOption[] = 
	[
		{ value: 'date', viewValue: 'data' },
		{ value: 'popularity', viewValue: 'popularność' },
		{ value: 'length', viewValue: 'długość' }
	];
	
	constructor(private data: DataService) { }
	
	ngOnInit() 
	{
		this.data.getObjectsByUrl(SurveyHeader, 'surveys/published').subscribe(result => {
			this.surveys = result;
		});
	}
}
