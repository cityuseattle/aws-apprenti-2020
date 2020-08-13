import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from "../loc8r-data.service";

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

  constructor(private loc8rDataService: Loc8rDataService) { }

  // locations: Location[] = [{
  //   _id: 'a1',
  //   name: 'Costy',
  //   distance: 1400.0,
  //   address: 'High Street, Reading',
  //   rating: 3,
  //   facilities: ['hot drinks', 'food', 'power']
  // },{
  //   _id: 'a2',
  //   name: 'Starcups',
  //   distance: 120.524,
  //   address: 'High Street, Reading',
  //   rating: 5,
  //   facilities: ['hot drinks', 'food', 'wifi']
  // }];

  public locations: Location[];

  private getLocations(): void {
    this.loc8rDataService
      .getLocations()
        .then(foundLocations => this.locations = foundLocations);
  }
  ngOnInit(): void {
    this.getLocations();
  }
}
