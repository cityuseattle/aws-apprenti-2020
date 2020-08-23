import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location, Review } from './location';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class Loc8rDataService {
  
  constructor(private http: HttpClient) { }
  
  //private apiBaseUrl = 'http://localhost:3000/api';
  private apiBaseUrl = environment.apiBaseUrl;
  public getLocations(lat: number, lng: number): Promise<Location[]> {
    //const lng: number = -0.7992599;
    //const lat: number = 51.378091;
    const maxDistance: number = 20000;
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location[])
      .catch(this.handleError);
  }

  public getLocationById(locationid: string): Promise<Location> {
    const url: string = `${this.apiBaseUrl}/locations/${locationid}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location)
      .catch(this.handleError);
  }

  public addReviewByLocationId(locationid: string, formData: Review): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/locations/${locationid}/reviews`;
    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response as Review)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}