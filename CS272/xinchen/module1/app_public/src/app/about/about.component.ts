import { Component, OnInit, NgModule } from '@angular/core';
import { FrameworkComponent } from '../framework/framework.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public pageContent = {
    header : {
      title : 'About Loc8r',
      strapline : ''
    },
    content : 'Loc8r was created to help people find places to sit down and gte a bit of work done. \n\nLorem ipsum dolor sitamet, consectetur adipiscing elit'
  }

  ngOnInit(): void {
  }

}
