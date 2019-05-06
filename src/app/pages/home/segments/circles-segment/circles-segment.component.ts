import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {} from 'jquery';
declare var $: any;
@Component({
  selector: 'app-circles-segment',
  templateUrl: './circles-segment.component.html',
  styleUrls: ['./circles-segment.component.scss'],

})
export class CirclesSegmentComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    var el = document.getElementById("firstCircle");
    el.textContent = "1000 stworzonych ankiet"
  }

  mouseHoverFirstCircle(e) {
    var el = document.getElementById("firstCircle");
    var lastText = el.textContent
    el.textContent = ""
    if (lastText == "1000 stworzonych ankiet") {
      el.textContent = "Przejrzyj ankiety";
    } else {
      el.textContent = "1000 stworzonych ankiet";
  }
  }
  onFirstCircleClick()
  {
    var el = document.getElementById("firstCircle");
    if(el.textContent = "Przejrzyj ankiety")
    {
      this.router.navigate([`../surveys/`], { relativeTo: this.route });
    }
  }
   async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  onTimeOfSurveyCreatingClick()
  {
    $.fn.pagepiling.moveTo(5);

  }
  onStatForYouClick()
  {
    $.fn.pagepiling.moveTo(4);

  }
  onTypesOfQuestionClick()
  {
    $.fn.pagepiling.moveTo(3);

  }
}
