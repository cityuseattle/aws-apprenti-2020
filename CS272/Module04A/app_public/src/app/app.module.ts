import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';

@NgModule({
  declarations: [
    ///AppComponent,
    FrameworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
