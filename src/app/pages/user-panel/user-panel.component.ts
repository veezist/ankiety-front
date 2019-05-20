import { Component, OnInit } from '@angular/core';
import { UserRegister } from 'src/app/models/auth/user-register';
import { Router } from '@angular/router';
import { MatCardImage } from '@angular/material';
import { SurveyHeader } from 'src/app/models/survey/survey-header';



@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

	public model = new UserRegister('Ala', 'Makota','Alus11', '123','alamakota@gmail.com', new Date());
  
  redirect(pagename: string) {
    this.router.navigateByUrl('/profile');
  }
  redirecto(pagename: string) {
    this.router.navigateByUrl('/creator');
  }
  public surveys:SurveyHeader[] = 
	[
		{ id:1,
      title: 'Zieleń miejska',
      description: 'Krótki opis ankiety, moze byc pare ladnych slow',
      countOfQuestion: 5,
      userDisplay:'Ala'
     },
     { 
      id:2,
     title: 'Zieleń wiejska',
     description: 'Krótki opis ankiety 2, moze byc pare ladnych slow',
     countOfQuestion: 2,
     userDisplay:'Ala'
    },
		{ id:3,
      title: 'Zieleń wodna',
      description: 'Krótki opis ankiety 3, moze byc pare ladnych slow',
      countOfQuestion: 49,
      userDisplay:'Ala'
     },
	];
  constructor(private router:Router) { }

  ngOnInit() {
  }
	get diagnostic() { return JSON.stringify(this.model); }

}
