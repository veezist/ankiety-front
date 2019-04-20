/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
import {Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import {} from 'jquery';
declare var $:JQueryStatic;

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  surveys: Object = undefined;
  constructor(private data: DataService) {}

  ngOnInit()
  {
    this.data.getFakeSurveys().subscribe(data => {
      this.surveys = data
      console.log(this.surveys); 
    });

    $("app-survey-preview-segment").css("background-color", "red");
    console.log("$$$");
    $(document).ready(function() {
      ($('#pagepiling') as any).pagepiling({
          menu: '#toolbar',
            direction: 'vertical',
            verticalCentered: true,
            sectionsColor: [],
            anchors: [],
            scrollingSpeed: 700,
            easing: 'swing',
            loopBottom: true,
            loopTop: false,
            css3: true,
            navigation: {
                'textColor': '#000',
                'bulletsColor': '#000',
                'position': 'right',
                'tooltips': ['welcome', 'circles', 'preview', 'statistics', 'tutorial']
            },
             normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 5,
            keyboardScrolling: true,
            sectionSelector: '.section',
            animateAnchor: false,
    
        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
      });
    });
  }

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: "white"},
    {text: 'Two', cols: 2, rows: 1, color: '#F76C6C'},
    {text: 'Three', cols: 2, rows: 1, color: '#24305E'},
    {text: 'Four', cols: 2, rows: 1, color: '#018786'},
  ];
}