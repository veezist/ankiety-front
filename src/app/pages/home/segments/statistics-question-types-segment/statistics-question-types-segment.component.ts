import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-statistics-question-types-segment',
  templateUrl: './statistics-question-types-segment.component.html',
  styleUrls: ['./statistics-question-types-segment.component.scss']
})
export class StatisticsQuestionTypesSegmentComponent implements OnInit {
  
 
  constructor() { }
 
  ngOnInit() {
    
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
  
 
}
}
