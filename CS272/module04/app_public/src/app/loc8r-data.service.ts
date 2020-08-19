// loc8r data service allows the Angular App to call API and get data 

import { Injectable } from '@angular/core';

// inject http into service 
import {HttpClient, HttpHeaders } from '@angular/common/http';


//Import Location class in the home-list component 
import { Location } from './home-list/home-list.component';

@Injectable({
  providedIn: 'root'
})

// Define the class 

export class Loc8rDataService {
// inject HttpClient service into the loc8rDataService service 
// private service not accessible from the outside 
// Inject http of TYPE HttpClient 
  constructor(private http: HttpClient) { }
  private apiBaseUrl = 'http://localhost:3000/api'; //Builds the URL to the API, using parameters for future enhancements

//creating a public method for components call 
// No input parameter & return promise containing an array of locations 
//Angular, HTTP requests run asynchronously and return Observables, Promises return complete sets of data.

  public getLocations(lat: number, lng: number): Promise<Location[]> {
    //const lng: number = -0.7992599;                               
    //const lat: number = 51.378091;                               
    const maxDistance: number = 20000;                               
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=200000`;
    return this.http  // return promise 
      .get(url)                    // HTTP Get call to URL builded                             
      .toPromise()                // Converts Observables to promise                                      
      .then(response => response as Location[])      // Converts response to JSON obj with type Location
      .catch(this.handleError);     
  }
// error handle/return 
  private handleError(error: any): Promise<any> {                 
    console.error('Something has gone wrong', error);             
    return Promise.reject(error.message || error);  
  }
}
