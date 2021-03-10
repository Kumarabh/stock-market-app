import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-aditya-birla-money',
  templateUrl: './aditya-birla-money.component.html',
  styleUrls: ['./aditya-birla-money.component.css']
})
export class AdityaBirlaMoneyComponent implements OnInit {

  
  companyScrollObject = [
    {
      links: "Aditya Birla Money Stock Trading",
      scrollTo: 100,
      sublinks: []     
    } 
  ]

  companyData
  brokerList
  companyName = 'Aditya Birla Money'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
  }
  
  getCompanyData() {
    this.service.getCompanyData('aditya_birla_money_review').subscribe((doc) => {
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
