import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';

export class Location {
  _id: string;
  name: String;
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

  public locations: Location[];

  private getLocations(): void {
    this.loc8rDataService
      .getLocations()
        .then(foundLocations => this.locations = foundLocations);
  }

  ngOnInit() {
    this.getLocations();
  }

  // locations: Location[] = [{
  //   _id: 'costy',
  //   name: 'Costy',
  //   distance: 14.0,
  //   address: 'High Street, Reading',
  //   rating: 3,
  //   facilities: ['Hot drinks', 'Food', 'Power']
  // }, {
  //   _id: 'starcups',
  //   name: 'Starcups',
  //   distance: 120.542,
  //   address: 'High Street, Reading',
  //   rating: 5,
  //   facilities: ['Hot drinks', 'Food', 'Wifi']
  // }];

  // name = 'Costy Test';

  // ngOnInit(): void {
  // }
}
