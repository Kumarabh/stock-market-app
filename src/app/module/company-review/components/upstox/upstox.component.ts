import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-upstox',
  templateUrl: './upstox.component.html',
  styleUrls: ['./upstox.component.css']
})
export class UpstoxComponent implements OnInit {

  broker1;
  broker2;
  tradingPlansComparisionObject
  constructor(private service: CompanyReviewService) {
    this.getUpstoxTradingPlansComparison();
   }

  ngOnInit() {
   
  }

  getUpstoxTradingPlansComparison() {
    this.service.getUpstoxTradingPlansComparison().subscribe((doc) => {
          if(doc.exists) {
            this.tradingPlansComparisionObject = doc.data();
            console.log(this.tradingPlansComparisionObject);
          } else {
            console.log('document not exist')
          }
       })
  }
  submitCompareForm () {
    console.log('Compare Brokers', this.broker1, this.broker2)
  }
}
