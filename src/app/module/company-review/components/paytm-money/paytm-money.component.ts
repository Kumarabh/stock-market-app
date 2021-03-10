import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-paytm-money',
  templateUrl: './paytm-money.component.html',
  styleUrls: ['./paytm-money.component.css']
})
export class PaytmMoneyComponent implements OnInit {

  companyScrollObject = [
    {
      links: "Paytm Money Stock Trading",
      scrollTo: 100,
      sublinks: []     
    } 
  ]

  companyData
  brokerList
  companyName = 'Paytm Money'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
  }
  
  getCompanyData() {
    this.service.getCompanyData('paytm_money_review').subscribe((doc) => {
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
