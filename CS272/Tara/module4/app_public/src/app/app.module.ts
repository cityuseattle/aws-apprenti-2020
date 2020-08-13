import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router'

import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeListComponent } from './home-list/home-list.component';
import { DistancePipe } from './distance.pipe';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    FrameworkComponent,
    AboutComponent,
    HtmlLineBreaksPipe,
    HomepageComponent,
    HomeListComponent,
    DistancePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
