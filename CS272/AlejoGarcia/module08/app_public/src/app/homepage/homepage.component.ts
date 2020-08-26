import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  public pageContent = {
    header: {
      title: 'Loc8r',
      strapline: 'Find reviews for local restaraunts in the Pacific Northwest!'
    },
    sidebar : 'Looking for a good place to sit and eat?  Loc8r is a place where you can quickly search for restaurants in your area and read what other think.  Additionally we invite you to add your own thoughts to help others in their search.'
  };

  ngOnInit(): void {
  }

}
