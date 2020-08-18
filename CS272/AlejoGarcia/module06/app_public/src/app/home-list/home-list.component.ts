import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { GeolocationService } from '../geolocation.service';

import { Location } from '../location';

// export class Location {
//   _id: string;
//   name: string;
//   distance: number;
//   address: string;
//   rating: number;
//   facilities: string[];
//   reviews: any[]
// }

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(
    private loc8rDataService: Loc8rDataService,
    private geolocationService: GeolocationService
    ) { }

  public locations: Location[];

  public message: string;

  private getLocations(position: any): void {
    this.message = 'Searching for nearby places';
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;
    this.loc8rDataService
      .getLocations(lat, lng)
      .then(foundLocations => {
        this.message = foundLocations.length > 0 ? '' :'No locations found'; 
        this.locations = foundLocations;
      });
  }

  private getPosition(): void {
    this.message = 'Getting your location...';
    this.geolocationService.getPosition(
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.neGeo.bind(this)
    );
  }

  private showError(error: any): void {
    this.message = error.message;
  };

  private neGeo(): void {
    this.message = 'Geolocation not supported by this browser.';
  };

  ngOnInit(): void {
    this.getPosition();
  }

}
