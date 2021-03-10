import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-wisdom-capital',
  templateUrl: './wisdom-capital.component.html',
  styleUrls: ['./wisdom-capital.component.css']
})
export class WisdomCapitalComponent implements OnInit {

  
  companyScrollObject = [
    {
      links: "Wisdom Capital Stock Trading",
      scrollTo: 100,
      sublinks: []     
    } 
  ]

  companyData
  brokerList
  companyName = 'Wisdom Capital'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
  }
  
  getCompanyData() {
    this.service.getCompanyData('wisdom_capital_review').subscribe((doc) => {
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
