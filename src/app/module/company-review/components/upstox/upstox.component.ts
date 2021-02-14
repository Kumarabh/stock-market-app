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
  tradingPlansComparisonObject
  companyBasicDetailsObject
  constructor(private service: CompanyReviewService) {
    this.getUpstoxTradingPlansComparison();
    this.getCompanyBasicDetails();
   }

  ngOnInit() {
   
  }

  getUpstoxTradingPlansComparison() {
    this.service.getUpstoxTradingPlansComparison().subscribe((doc) => {
          if(doc.exists) {
            this.tradingPlansComparisonObject = doc.data();
            console.log(this.tradingPlansComparisonObject);
          } else {
            console.log('document not exist')
          }
       })
  }
  getCompanyBasicDetails() {
    this.service.getCompanyBasicDetails("upstox-review").subscribe((doc) => {
          if(doc.exists) {
            this.companyBasicDetailsObject = doc.data();
            console.log('Upstox basic details',this.companyBasicDetailsObject);
          } else {
            console.log('document not exist')
          }
       })
  }
  submitCompareForm () {
    console.log('Compare Brokers', this.broker1, this.broker2)
  }
}
