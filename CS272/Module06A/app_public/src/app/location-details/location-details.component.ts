import { Component, OnInit, Input } from '@angular/core';
import { Location, Review } from '../location';
import {Loc8rDataService} from '../loc8r-data.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  public newReview: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  };

  public formVisible: boolean = false;
  public formError: string;

  public googleAPIKey: string = 'AIzaSyCG41TrfYrzKeH3FCe6CEsw7Yqge9RJDpE';

  constructor(private loc8rDataService: Loc8rDataService) { }

  ngOnInit(): void {
  }

  private formIsValid(): boolean {
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else {
      return false;
    }
  }

  public onReviewSubmit(): void {
    this.formError = '';
    console.log(this.newReview)
    if (this.formIsValid()) {
      console.log(this.newReview)
      this.loc8rDataService.addReviewByLocationId(this.location._id, this.newReview)
        .then((review: Review) => {
          let reviews = this.location.reviews.slice(0);
          reviews.unshift(review);
          this.location.reviews = reviews;
          this.resetAndHideReviewForm();
        });
    } else {
      this.formError = 'All fields requried, please try again';
    }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }
}
