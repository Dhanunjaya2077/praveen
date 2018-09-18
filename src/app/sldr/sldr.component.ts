import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sldr',
  templateUrl: './sldr.component.html',
  styleUrls: ['./sldr.component.css']
})
export class SldrComponent implements OnInit {

  someRange = 20;

  constructor() { }

  ngOnInit() {
  }
  lessRelevant(){
    this.someRange=20;

  }
  relevant(){
    this.someRange=50;
  }
  veryRelevant(){
    this.someRange=80;
  }
  tryAgain(){
    this.someRange=20;
  }

}
