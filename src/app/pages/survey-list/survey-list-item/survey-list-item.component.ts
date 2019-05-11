import { Component, OnInit, Input } from '@angular/core';
import { SurveyHeader } from 'src/app/models/survey/survey-header';

@Component({
	selector: 'app-survey-list-item',
	templateUrl: './survey-list-item.component.html',
	styleUrls: ['./survey-list-item.component.scss']
})
export class SurveyListItemComponent implements OnInit 
{
	@Input()
	survey: SurveyHeader;

	constructor() { }
	
	ngOnInit() 
	{
	}
	
}
