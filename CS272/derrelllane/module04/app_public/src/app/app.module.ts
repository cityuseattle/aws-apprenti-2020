import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { FrameworkComponent } from './framework/framework.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { HomeListComponent } from './home-list/home-list.component';
import { DistancePipe } from './distance.pipe';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    FrameworkComponent,
    AboutComponent,
    HomepageComponent,
    HtmlLineBreaksPipe,
    HomeListComponent,
    DistancePipe,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: HomepageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
