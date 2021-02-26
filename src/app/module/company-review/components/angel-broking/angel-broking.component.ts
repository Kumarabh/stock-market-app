import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-angel-broking',
  templateUrl: './angel-broking.component.html',
  styleUrls: ['./angel-broking.component.css']
})
export class AngelBrokingComponent implements OnInit {

  companyScrollObject = [
    {
      links: "Angel Broking Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
    {
      links: "Angel Broking Trading Platforms",
      scrollTo: 500,
      sublinks: [
      {links: "Angel Broking Trade", scrollTo: 600},
      {links: "Angel SpeedPro", scrollTo: 1300},
      {links: "Angel Broking App", scrollTo: 1700},

    ]
      
    },
    {
      links: "Angel Broking Charges 2021",
      scrollTo: 2400,
      sublinks: [
      {links: "Angel Broking Options Brokerage Charges", scrollTo: 2500},
      {links: "Angel Broking Charges For Options", scrollTo: 3000},
      ]
      
  },
  {
    links: "Compare Broker against other broker",
    scrollTo: 3600,
    sublinks: [
    ]
    
}
  ]
  broker1
  broker2
  companyData
  brokerList
  companyName = "Angel Broking"
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('angel_broking_review').subscribe((doc) => {
      if(doc.exists) {
        this.companyData = doc.data();
        this.companyName = this.companyData.company_name;
        console.log('companyData',this.companyData);
      } else {
        console.log('document not exist')
      }
   })
  }

  submitCompareForm() {

  }

  

}
