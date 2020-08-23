import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  public getPosition(cbSuccess, cbError, cbNoGeo): void {              1
    if (navigator.geolocation) {                                       2
      navigator.geolocation.getCurrentPosition(cbSuccess, cbError);    2
    } else {                                                           3
      cbNoGeo();                                                       3
    }
  }
}
