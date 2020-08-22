import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{environment} from '../environments/environment';
import {Location, Review} from './location';

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(private http: HttpClient) { }

  //private apiBaseUrl = 'http://localhost:3000/api';
  private apiBaseURL = environment.apiBaseUrl;
  public getLocations(lat: number, lng: number): Promise<Location[]> {
    //const lng: number = -0.7992599;
    //const lat: number = 51.378091;
    const maxDistance: number = 200000;
    const url: string = `${this.apiBaseUrl}/locations?lng= ${lng}&lat=${lat}&maxDistance=${maxDistance}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location [])
      .catch(this.handleError);
  }

  public getLocationByID(locationId: string): Promise<Location>{
    const url:string = `${this.apiBaseUrl}/locations/${locationId}`;
    return this.http
       .get(url)
       .toPromise()
       .then(response => response as Location)
       .catch(this.handleError);
  }

  public addReviewByLocationId(locationId: string, formData: Review): Promise<Review>{
    const url: string = `${this.apiBaseUrl}/locations/${locationId}/reviews`;
    return this.http
     .post(url, formData)
     .toPromise()
     .then(response => response as Review)
     .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
     console.error('Something has gone wrong', error);
     return Promise.reject(error.message || error);
  }
}
