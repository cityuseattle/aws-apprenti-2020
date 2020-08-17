import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from "@angular/common/http";

import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { HomeListComponent } from './home-list/home-list.component';
import { DistancePipe } from './distance.pipe';

import { NbThemeModule, NbLayoutModule, NbChatModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    AboutComponent,
    HomepageComponent,
    HtmlLineBreaksPipe,
    HomeListComponent,
    DistancePipe,
    ChatbotComponent,
    PageHeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbSpinnerModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
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
