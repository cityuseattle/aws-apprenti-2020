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
    name: 'Costy Test - Class',
    distance: 14.0,
    address: 'High Street, Reading',
    rating: 3,
    facilities: ['hot drinks', 'food', 'power']
  }, {
    _id: "009990",
    name: 'Starcups',
    distance:120.456,
    address: 'High street, Reading',
    rating: 5,
    facilities: ['wifi', 'food', 'hot drinks']
  }];
  ngOnInit(): void {
  }

}
