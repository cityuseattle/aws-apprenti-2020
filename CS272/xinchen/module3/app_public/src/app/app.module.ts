import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { HomeListComponent } from './home-list/home-list.component';
import { ListItemComponent } from './home-list/list-item/list-item.component';
import { DistancePipe } from './distance.pipe';
import { Loc8rDataService } from './loc8r-data.service'
@NgModule({
  declarations: [
  
    HomeListComponent,
  
    ListItemComponent,
  
    DistancePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeListComponent,Loc8rDataService]
})
export class AppModule { }
