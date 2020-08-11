import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  declarations: [
    // AppComponent,
    HomeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
