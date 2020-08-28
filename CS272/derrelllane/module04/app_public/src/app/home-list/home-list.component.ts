import { Component, OnInit } from '@angular/core';
// linking component and the loc8r data service, import from source file
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

  // Inject the loc8rdata and geolocation services into the component 
  constructor(private loc8rDataService: Loc8rDataService,
    private geolocationService: GeolocationService) { }

  // create method to call data service method and handle promise response 
  public locations: Location[];            // location declaration = no default
  public message: string;

  private getLocations(position: any): void {               // getLocations method accepts no parameter and returns nothing                  
    this.message = 'Searching for nearby places.';
    const lat: number = position.coords.latitude;       
    const lng: number = position.coords.longitude;      
    this.loc8rDataService                                            
      .getLocations(lat,lng)                            // call data service method      
      .then(foundLocations => { 
        this.message = foundLocations.length > 0 ? '': 'No locations found'; 
        this.locations = foundLocations;
      });
  } 

  private getPosition() : void {
    this.message = 'Getting your location ...';
    this.geolocationService.getPosition (
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this));
  }

  private showError(error : any): void {
    this.message = error.message;
  };

  private noGeo() : void {
    this.message = "Geolocation not supported by this browser.";
  };

 
  ngOnInit() {      // makes sure services are only called when available
    this.getPosition();  // data call 
  }
}