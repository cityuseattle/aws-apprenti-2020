import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    FrameworkComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
    RouterModule.forRoot([ 
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
