import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HomeListComponent } from './home-list/home-list.component';
import { ListItemComponent } from './home-list/list-item/list-item.component';
import { DistancePipe } from './distance.pipe';

@NgModule({
  declarations: [
  
    HomeListComponent,
  
    ListItemComponent,
  
    DistancePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
