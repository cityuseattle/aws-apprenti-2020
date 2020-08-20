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
      strapline: 'Find Places to work with wifi near you!'
    },
    sidebar : 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place youre looking for.'
  };

  ngOnInit(): void {
  }

}
