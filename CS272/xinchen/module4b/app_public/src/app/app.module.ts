import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeListComponent } from './home-list/home-list.component';
import { DistancePipe } from './distance.pipe';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { MostRecentFirstPipe } from './most-recent-first.pipe';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
// import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  declarations: [
    FrameworkComponent,
    AboutComponent,
    HtmlLineBreaksPipe,
    HomepageComponent,
    HomeListComponent,
    DistancePipe,
    PageHeaderComponent,
    SidebarComponent,
    LocationDetailsComponent,
    DetailsPageComponent,
    MostRecentFirstPipe,
    RatingStarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: HomepageComponent
    //   },
    //   {
    //     path: 'about',
    //     component: AboutComponent
    //   },
    //   {
    //     path: 'location/:locationId',
    //     component: DetailsPageComponent
    //   }      
    // ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
