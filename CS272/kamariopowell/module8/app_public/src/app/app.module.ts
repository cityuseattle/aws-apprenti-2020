import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component'; 
import { HomeListComponent } from './home-list/home-list.component';
import  { DistancePipe } from './distance.pipe';
import { AboutComponent } from './about/about.component';
import { FrameworkComponent } from './framework/framework.component';
import { MostRecentFirstPipe } from './most-recent-first.pipe';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    HomeListComponent,
    AboutComponent,
    FrameworkComponent,
    MostRecentFirstPipe,
    RatingStarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
