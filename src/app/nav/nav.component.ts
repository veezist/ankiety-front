import { Component, OnInit } from '@angular/core';
import {} from 'jquery';
import { Router } from '@angular/router';
declare var $: any;


@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit
{
	appTitle: String ="Ankiety"
	constructor(public router: Router) { }
	
	ngOnInit()
	{
	}
	
	onAboutAnchorClick()
	{
		$.fn.pagepiling.moveTo(2);
	}
}
