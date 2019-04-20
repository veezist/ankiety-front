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
		// document.getElementsByTagName("app-circles-segment").item(0).scrollIntoView({ behavior: "smooth", block: "end" });
		(document.getElementsByTagName("html").item(0) as HTMLElement).style.overflow = "auto";
		(document.getElementsByTagName("body").item(0) as HTMLElement).style.overflow = "auto";
		document.getElementById("pp-nav").remove();
	}
}
