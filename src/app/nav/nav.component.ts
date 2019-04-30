import { Component, OnInit } from '@angular/core';
import {} from 'jquery';
declare var $: any;


@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit
{
	appTitle: String ="Ankiety"
	constructor() { }
	
	ngOnInit()
	{
	}
	
	onAboutAnchorClick()
	{
		$.fn.pagepiling.moveTo(2);
	}
}
