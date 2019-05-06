import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-question-types-segment',
  templateUrl: './statistics-question-types-segment.component.html',
  styleUrls: ['./statistics-question-types-segment.component.scss']
})
export class StatisticsQuestionTypesSegmentComponent implements OnInit {
  
 
  constructor() { }
 
  ngOnInit() {
    var swiper = new Swiper('.swiper-container', {
      /*pagination: {
        //el: '.swiper-pagination',
        //type: 'progressbar',
      },*/
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  
  // config: SwiperOptions = {
  //   autoplay: 3, // Autoplay option having value in milliseconds
  //   initialSlide: 0, // Slide Index Starting from 0
  //   slidesPerView: 3, // Slides Visible in Single View Default is 1
  //   pagination: '.swiper-pagination', // Pagination Class defined
  //   paginationClickable: true, // Making pagination dots clicable
  //   nextButton: '.swiper-button-next', // Class for next button
  //   prevButton: '.swiper-button-prev', // Class for prev button
  //   spaceBetween: 20 // Space between each Item
    
 // };
 
}
