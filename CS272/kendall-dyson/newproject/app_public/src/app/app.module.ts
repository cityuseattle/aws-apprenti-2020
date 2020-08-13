import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';

@NgModule({
  declarations: [
    FrameworkComponent,
    AboutComponent,
    HtmlLineBreaksPipe
  ],
  imports: [
    BrowserModule,
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
