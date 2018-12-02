import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng7-pre';

  surveys: Object;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getFakeSurveys().subscribe(data => {
        this.surveys = data
        console.log(this.surveys);
      }
    );
    }
}
