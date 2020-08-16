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
      strapline: 'Fiind places to work with wifi near you!'
    },
    sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when our and about. Perhaps with coffe, cake or a pint? Let Loc8r you find the place you are looking for.'
  };

  ngOnInit(): void {
  }

}
