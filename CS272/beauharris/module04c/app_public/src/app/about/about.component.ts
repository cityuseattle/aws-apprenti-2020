import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pageContent = {
    header: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    content : "about works"
  };

}
