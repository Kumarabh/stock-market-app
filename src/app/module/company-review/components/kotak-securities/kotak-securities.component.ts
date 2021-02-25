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
      {links: "Brokerage for Delivery Based Trades", scrollTo: 1500},
      {links: "Other Standard Charges on Trades", scrollTo: 2300},
      {links: "Useful Articles", scrollTo: 2600},

    ]
      
    },
    {
      links: "HDFC Securities Online Account Opening",
      scrollTo: 3200,
      sublinks: [
      
      ]
      
  },
  {
    links: "HDFC Securities Trading Software",
    scrollTo: 3800,
    sublinks: [
    
    ]
  },
  {
    links: "HDFC Securities Pros and Cons",
    scrollTo: 4200,
    sublinks: []
  },
  {
    links: "HDFC Securities Margin / Exposure",
    scrollTo: 5200,
    sublinks: []
  },
  {
    links: "HDFC Securities Ratings",
    scrollTo: 5900,
    sublinks: []
  },
  {
    links: "Compare Broker against other broker",
    scrollTo: 6400,
    sublinks: [
    ]
    
}
  ]
  broker1
  broker2
  companyData
  brokerList
  companyName
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
