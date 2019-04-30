import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import {} from 'jquery';
declare var $:JQueryStatic;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
	public title: string = 'ng7-pre';
	
	constructor() { }
	
	ngOnInit() { }
	
	onActivate($event)
	{
		// console.log('onActivate called');
		// console.log($event);

		if ($event instanceof HomeComponent)
		{
			// console.log('entered home component');
			$('html').css('overflow', 'hidden');
			$('body').css('overflow', 'initial');
			$('#nav-about-option').css('display', 'block');
		}
	}

	onDeactivate($event)
	{
		// console.log('onDeactivate called');
		// console.log($event);

		if ($event instanceof HomeComponent)
		{
			$('html').css('overflow', 'auto');
			$('body').css('overflow', 'initial');
			$('#pp-nav').remove();
			$('#nav-about-option').css('display', 'none');
			// document.getElementById("pp-nav").remove();
		}
	}
}
