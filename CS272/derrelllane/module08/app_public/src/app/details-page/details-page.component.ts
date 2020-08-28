import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  public pageContent = {
    header: {
      title: 'Location name',
      strapline: ''
    },
    sidebar: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.'
  };

}
