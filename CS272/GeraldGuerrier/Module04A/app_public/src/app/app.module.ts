import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FrameworkComponent } from './framework/framework.component';

@NgModule({
  declarations: [
    FrameworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
