import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header-segment',
	templateUrl: './header-segment.component.html',
	styleUrls: ['./header-segment.component.scss']
})
export class HeaderSegmentComponent implements OnInit
{
	constructor() { }
	
	ngOnInit()
	{
	}
	
	scrollToCircles()
	{
		document.getElementsByTagName("app-circles-segment").item(0).scrollIntoView({ behavior: "smooth" });
	}
}
