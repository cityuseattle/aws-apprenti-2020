import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  locations: Location[] = [{
    _id: '123456',
    name: 'Costy',
    distance: 14000.1234,
    address: 'High Street, Reading',
    rating: 3,
    facilities: ['Hot Drinks', 'Food', 'Power']
  }, {
    _id: '987654',
    name: 'Starcups',
    distance: 120.542,
    address: 'High Street, Reading',
    rating: 5,
    facilities: ['WiFi', 'Food', 'Hot Drinks']
  }];

  ngOnInit(): void {
  }

}
