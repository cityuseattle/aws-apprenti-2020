// geolocation service call back to user's location 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }
// create a method to expose the geoLocation service 

//Defines a public member called getPosition that accepts 
//three callback functions for success, error, and not supported  
  public getPosition(cbSuccess, cbError, cbNoGeo): void {           
    if (navigator.geolocation) {          // if service exists. calls the native method, passing through success and error callbacks                            
      navigator.geolocation.getCurrentPosition(cbSuccess, cbError);    
    } else {           //If geolocation isn’t supported, invokes the not supported callback                                                
      cbNoGeo();                                                       
    }
  }
}
