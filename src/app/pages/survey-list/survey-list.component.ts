import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {

  public surveys: Object;

  constructor(private data: DataService) { }
  
  ngOnInit() 
  {
    this.data.getFakeSurveys().subscribe(data => {
        this.surveys = data
        console.log(this.surveys);
      });
  }
}
