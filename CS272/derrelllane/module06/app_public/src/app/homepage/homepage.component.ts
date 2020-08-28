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
      sidebar : 'Looking for wifi and a seat? Loc8r helps you'
    }
  }

  ngOnInit(): void {
  }

}
