import { Component, OnInit } from '@angular/core';
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
  constructor(private Loc8rDataService: Loc8rDataService) { }

  public locations: Location[];

  private getLocations(): void {
    this.Loc8rDataService
      .getLocations()
        .then(foundLocations => this.locations = foundLocations);
  }



  // location: Location = {
  //   _id: '5f3452aebd2fc25308e23bb9',
  //   name: 'Costy Test - Class',
  //   distance: 14.0,
  //   address: 'High Street, Reading',
  //   rating: 3,
  //   facilities: ['hot drinks', 'food', 'power']
  // };

  // name = 'Costy Test';

  ngOnInit() {
    this.getLocations();
  }

}
