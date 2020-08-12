import { Component, OnInit } from '@angular/core';

export class Location {
  _id: string;
  name: string;
  distance: float;
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
    _id: 'a1',
    name: 'Costy',
    distance: 14000.1234,
    address: 'High Street, Reading',
    rating: 3,
    facilities: ['hot drinks', 'food', 'power']
  },{
    _id: 'a2',
    name: 'Starcups',
    distance: 120.542,
    address: 'High Street, Reading',
    rating: 4,
    facilities: ['hot drinks', 'food', 'wifi']
  }];

  ngOnInit(): void {
  }

}
