import { Component, OnInit } from '@angular/core';
import { SurveyHeader } from 'src/app/models/survey/survey-header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-survey-item',
  templateUrl: './panel-survey-item.component.html',
  styleUrls: ['./panel-survey-item.component.scss']
})
export class PanelSurveyItemComponent implements OnInit {

  redirect(pagename: string) {
    this.router.navigateByUrl('/survey/:1');
  }
  public survey = new SurveyHeader(1,
  'Zieleń miejska',
  'Krótki opis ankiety, moze byc pare ladnych slow',
  '5',
  'Ala');

  constructor(private router:Router) { }

  ngOnInit() {
  }
 
}
