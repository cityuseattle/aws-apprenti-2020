import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { GeolocationService } from '../geolocation.service';

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

  constructor(
    private loc8rDataService: Loc8rDataService,
    private geoLocationService: GeolocationService
  ) { }

//  location: Location[] = [{
//    _id: '590d8dc7a7cb5b8e3f1bfc48',
//    name: 'Costy',
//    distance: 14.0,
//    address: 'High Street, Reading',
//    rating: 3,
//    facilities: ['hot drinks', 'food', 'power']
//  }, {
//    _id: '590d8dc7a7cb5b8e3f1bfc48',
//    name: 'Starcups',
//    distance: 120.542,
//    address: 'High Street, Reading',
//   rating: 5,
//    facilities: ['wifi', 'food', 'hot drinks']
//  }];

  public locations: Location[];

  public message: string;

  private getLocations(position: any): void {
    this.message = 'Searching for nearby places';
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;
    // const lng: number = -0.7992599;
    // const lat: number = 51.378091
    this.loc8rDataService
      .getLocations(lat, lng)
        .then(foundLocations => {
          this.message = foundLocations.length > 0 ? '' : 'No locations found';
          this.locations = foundLocations;
        });
  }

  private getPosition(): void {
    this.message = 'Getting your location...';
    this.geoLocationService.getPosition(
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this)
    );
  }
  
  private showError(error: any): void {
    this.message = error.message;
  };

  private noGeo(): void {
    this.message = 'Geolocation not supported by this browser.';
  };

  ngOnInit(): void {
    this.getPosition();
  }

}