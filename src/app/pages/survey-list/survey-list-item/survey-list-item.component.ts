import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-survey-list-item',
	templateUrl: './survey-list-item.component.html',
	styleUrls: ['./survey-list-item.component.scss']
})
export class SurveyListItemComponent implements OnInit 
{
	@Input()
	survey: Object;

	constructor() { }
	
	ngOnInit() 
	{
	}
	
}
