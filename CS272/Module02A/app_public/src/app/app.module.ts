import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  declarations: [
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
