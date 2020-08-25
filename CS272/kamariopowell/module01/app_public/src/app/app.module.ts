import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component'; 
import { HomeListComponent } from './home-list/home-list.component';
import  { DistancePipe } from './distance.pipe';

@NgModule({
  declarations: [
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
