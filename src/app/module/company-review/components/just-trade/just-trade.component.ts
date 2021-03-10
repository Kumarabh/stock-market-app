import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-just-trade',
  templateUrl: './just-trade.component.html',
  styleUrls: ['./just-trade.component.css']
})
export class JustTradeComponent implements OnInit {

  companyScrollObject = [
    {
      links: "Just Trade Stock Trading",
      scrollTo: 100,
      sublinks: []     
    } 
  ]

  companyData
  brokerList
  companyName = 'Just Trade'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
  }
  
  getCompanyData() {
    this.service.getCompanyData('just_trade_review').subscribe((doc) => {
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
