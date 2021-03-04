import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-iifl-securities',
  templateUrl: './iifl-securities.component.html',
  styleUrls: ['./iifl-securities.component.css']
})
export class IiflSecuritiesComponent implements OnInit {

  companyScrollObject = [
    {
      links: "IIFL Securities Stock Trading",
      scrollTo: 100,
      sublinks: [
      ]
      
    },
    {
      links: "IIFL Securities Charges 2021",
      scrollTo: 900,
      sublinks: [
        {links: "Account Opening Fees & Annual maintenance charges (AMC)", scrollTo: 1000},
        {links: "IIFL Securities Brokerage Plan", scrollTo: 1300},
        {links: "IIFL Brokerage Charges", scrollTo: 1500},
        {links: "IIFL Charges", scrollTo: 2700},
        {links: "IIFL Services Offered by Plan", scrollTo: 4100},
       

      ]
    },
    
    
    {
      links: "IIFL Securities Trading Software (IIFL Securities Trading Platforms)",
      scrollTo: 4800,
      sublinks: [
        {links: "IIFL Markets App (Android and iOS)", scrollTo: 4800},
        {links: "Trader Terminal (TTWeb Website)", scrollTo: 4800},
        {links: "Trader Terminal (TT.Exe Desktop PC)", scrollTo: 5000},
        {links: "TT Iris", scrollTo: 5500},
        {links: "IIFL Mutual Funds App (Android and iOS)", scrollTo: 5600}
      ]
      
  },
  
  {
    links: "IIFL Securities Pros and Cons",
    scrollTo: 6000,
    sublinks: [
      {links: "IIFL Securities Pros (Advantages)", scrollTo: 6000},
      {links: "IIFL Securities Cons (Disadvantages)", scrollTo: 6600}
    ]
    
},

  {
    links: "IIFL Securities Margin / Exposure",
    scrollTo: 7200,
    sublinks: []
    
}
,
  {
    links: "IIFL Securities Ratings",
    scrollTo: 7800,
    sublinks: []
    
},
{
  links: "Compare IIFL Securities with Top Brokers in India",
  scrollTo: 8400,
  sublinks: []
}
  ]
  broker1
  broker2
  companyData
  brokerList
  companyName = 'IIFL Securities';
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('iifl_securities_review').subscribe((doc) => {
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
