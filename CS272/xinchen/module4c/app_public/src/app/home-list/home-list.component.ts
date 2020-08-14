import { Component, OnInit } from '@angular/core';
import { Loc8rDataService} from '../loc8r-data.service'
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

  constructor(private loc8rDataService:Loc8rDataService) { }
  // location: Location = {
  //   _id: '590d8dc7a7cb5b8e3f1bfc48',
  //   name: 'Costy',
  //   distance: 14.0,
  //   address: 'High Street, Reading',
  //   rating: 3,
  //   facilities: ['hot drinks','food','power']
  // }
  public locations: Location[];
  private getLocation(): void { 
    this.loc8rDataService
      .getLocations()
      .then(foundLocations => this.locations = foundLocations);
  }
  ngOnInit(): void {
    this.getLocation();
  }

}
