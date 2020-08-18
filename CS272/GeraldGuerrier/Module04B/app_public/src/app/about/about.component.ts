import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public pageContent = {
    header : {
    title: 'About Loc8r',
    strapline: ''
  },
  content : 'Loc8r was created to help people find place to sit down and get a bit'
};

  ngOnInit(): void {
  }

}
