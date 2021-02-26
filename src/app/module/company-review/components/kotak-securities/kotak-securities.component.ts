import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-kotak-securities',
  templateUrl: './kotak-securities.component.html',
  styleUrls: ['./kotak-securities.component.css']
})
export class KotakSecuritiesComponent implements OnInit {

  companyScrollObject = [
    {
      links: "KOTAK Securities Stock Trading",
      scrollTo: 100,
      sublinks: [
        {links: "Kotak Securities Open Account", scrollTo: 1500}
      ]
      
    },
    {
      links: "Account Types",
      scrollTo: 1200,
      sublinks: [
        {links: "AutoInvest", scrollTo: 1200},
        {links: "Kotak Gateway", scrollTo: 1200},
        {links: "Kotak Privilege Circle", scrollTo: 1700},
        {links: "Kotak Freedom", scrollTo: 1900},
        {links: "Kotak Super Saver", scrollTo: 1900},
        {links: "PMS (Portfolio Management Service)", scrollTo: 1900},
        {links: "NRI Account", scrollTo: 2200},
        {links: "Trinity Account [3-in-1 Account]", scrollTo: 2200},

      ]
    },
    
    {
      links: "Kotak Securities Charges 2021",
      scrollTo: 2500,
      sublinks: [
      {links: "Fixed Brokerage Plan", scrollTo: 2600},
      {links: "Dynamic Brokerage Plan", scrollTo: 2800},
      {links: "Free Intraday Trading (FIT)", scrollTo: 4300},

    ]
      
    },
    {
      links: "Kotak Securities Minimum Brokerage:",
      scrollTo: 5000,
      sublinks: [
      
      ]
      
  },
  {
    links: "Kotak Securities Demat Account Charges:",
    scrollTo: 5300,
    sublinks: [
    
    ]
  },
  {
    links: "Useful Articles",
    scrollTo: 5900,
    sublinks: []
  },
  {
    links: "Kotak Securities Online Account Opening",
    scrollTo: 6200,
    sublinks: []
  },
  {
    links: "Kotak Securities Trading Software (Kotak Securities Trading Platforms)",
    scrollTo: 6600,
    sublinks: [
      {links: "Website Based Trading", scrollTo: 6700},
      {links: "Trading Terminals (KEATProX and FASTLANE)", scrollTo: 6700},
      {links: "Mobile Stock Trading", scrollTo: 7000},
      {links: "Branch Advisory and Call & Trade", scrollTo: 7200},

    ]
  },
  {
    links: "Kotak Securities Pros and Cons",
    scrollTo: 7400,
    sublinks: [
      {links: "Kotak Securities Pros (Advantages)", scrollTo: 7400},
      {links: "Kotak Securities Cons (Disadvantages)", scrollTo: 7700}
    ]
    
},

  {
    links: "Kotak Securities Margin / Exposure",
    scrollTo: 8100,
    sublinks: []
    
}
,
  {
    links: "KOTAK Securities Ratings",
    scrollTo: 8900,
    sublinks: []
    
},
{
  links: "Compare KOTAK Securities with Top Brokers in India",
  scrollTo: 9400,
  sublinks: []
}
  ]
  broker1
  broker2
  companyData
  brokerList
  companyName = 'KOTAK Securities';
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('kotak_securities_review').subscribe((doc) => {
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
