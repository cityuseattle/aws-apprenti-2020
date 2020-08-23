import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { GeolocationService } from '../geolocation.service';

import { Location } from '../location';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(
    private Loc8rDataService: Loc8rDataService,
    private geoLocationService: GeolocationService
  ) { }

  // location: Location[] = [{
  //   _id: '590d8dc7a7cb5b8e3f1bfc48',
  //   name: 'Costy',
  //   distance: 14000.1234,
  //   address: 'High Street, Reading',
  //   rating: 3,
  //   facilities: ['hot drinks', 'food', 'power']
  // }, {
  //   _id: '590d8dc7a7cb5b8e3f1bfc48',
  //   name: 'Starcups',
  //   distance: 120.542,
  //   address: 'High Street, Reading',
  //   rating: 5,
  //   facilities: ['wifi', 'food', 'hot drinks']
  // }];

  public locations: Location[];

  public message: string

  private getLocations(position: any): void {
    this.message = 'Searching for nearby places';
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;
    this.Loc8rDataService
      .getLocations(lat, lng)
      .then(foundLocations => {
        this.message = foundLocations.length > 0 ? '' : 'No locations found';
        this.locations = foundLocations
      });
  }
  private getPosition(): void {
    this.message = 'Getting your location...';
    this.geoLocationService.getPosition (
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this)
    );
  }
  private showError(error: any) : void {
    this.message = error.message;
  };

  private noGeo(): void {
    this.message = 'Geolocation not supported by this browser.';
  };

  ngOnInit() {
    this.getPosition();
  }

}
