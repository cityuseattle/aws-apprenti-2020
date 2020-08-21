import { Component, OnInit } from '@angular/core';
// linking component and the loc8r data service, import from source file
import { Loc8rDataService } from '../loc8r-data.service'; 

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

  // Inject the loc8rdata service to the component 
  constructor(private loc8rDataService: Loc8rDataService) { }

  // create method to call data service method and handle promise response 
  public locations: Location[];            // location declaration = no default

  private getLocations(): void {               // getLocations method accepts no parameter and returns nothing                  
  this.loc8rDataService                                            
    .getLocations()                            // call data service method      
      .then(foundLocations => this.locations = foundLocations);    // update arrays of location data
  } 

  // Angular lifecycle hook 
  //The ngOnInit hook allows you to hook into when the component is initialized and ready.
  // this hook only calls the getLocations() method after the component is initialized and ready to run
  ngOnInit() {      // makes sure services are only called when available
    this.getLocations();  // data call 
  }

}
