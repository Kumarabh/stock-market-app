import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-zerodha-review',
  templateUrl: './zerodha-review.component.html',
  styleUrls: ['./zerodha-review.component.css']
})
export class ZerodhaReviewComponent implements OnInit {

  broker1;
  broker2;

  constructor() { }

  ngOnInit() {
  }

  submitCompareForm () {
    console.log('Compare Brokers', this.broker1, this.broker2)
  }

}
