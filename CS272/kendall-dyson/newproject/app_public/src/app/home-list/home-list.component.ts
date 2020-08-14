import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';



export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];

}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(private Loc8rDataService: Loc8rDataService) { }
  public locations: Location [];

  private getLocations(): void {
    this.Loc8rDataService
      .getLocations()
        .then(foundlocations => this.locations = foundlocations);
  }

  ngOnInit(){
    this.getLocations();
  }
}  




