import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-trading-bells',
  templateUrl: './trading-bells.component.html',
  styleUrls: ['./trading-bells.component.css']
})
export class TradingBellsComponent implements OnInit {
  companyScrollObject = [
    {
      links: "Trading Bells Stock Trading",
      scrollTo: 100,
      sublinks: []     
    } 
  ]

  companyData
  brokerList
  companyName = 'Trading Bells'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
  }
  
  getCompanyData() {
    this.service.getCompanyData('trading_bells_review').subscribe((doc) => {
      if(doc.exists) {
        this.companyData = doc.data();
        this.companyName = this.companyData.company_name;
        console.log('companyData',this.companyData);
      } else {
        console.log('document not exist')
      }
   })
  }


}
