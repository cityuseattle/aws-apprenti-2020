import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  locations: Location[] = [{
    _id: 'costy', //change this ID !!!!!!!!!!!!!!!!!!!!!!!!!
    name: 'Costy',
    distance: 14.0,
    address: 'High Street, Reading',
    rating: 3,
    facilities: ['Hot drinks', 'Food', 'Power']
  }, {
    _id: 'starcups', //change this ID !!!!!!!!!!!!!!!!!!!!!!!!!
    name: 'Starcups',
    distance: 120.542,
    address: 'High Street, Reading',
    rating: 5,
    facilities: ['Hot drinks', 'Food', 'Wifi']
  }];

  name = 'Costy Test';

  ngOnInit(): void {
  }
}
