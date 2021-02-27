import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-icici-direct',
  templateUrl: './icici-direct.component.html',
  styleUrls: ['./icici-direct.component.css']
})
export class IciciDirectComponent implements OnInit {

  companyScrollObject = [
    {
      links: "ICICI Direct Stock Trading",
      scrollTo: 100,
      sublinks: [
      ]
      
    },
    {
      links: "ICICI Direct Charges 2021",
      scrollTo: 900,
      sublinks: [
        {links: "ICICI Direct Account Opening Charges and AMC", scrollTo: 1000},
        {links: "I-Secure Plan (Flat brokerage Plan)", scrollTo: 1500},
        {links: "ICICI Direct Prepaid Brokerage Plan", scrollTo: 2500},
        {links: "ICICI Direct Prime Plan", scrollTo: 3300},
        {links: "ICICI Minimum Brokerage Charges", scrollTo: 3800},
       

      ]
    },
    
    {
      links: "ICICI Direct Online Account Opening",
      scrollTo: 4200,
      sublinks: [
      
    ]
      
    },
    {
      links: "ICICI Direct Trading Software (ICICI Direct Trading Platforms)",
      scrollTo: 4700,
      sublinks: [
        {links: "ICICIDirect.com", scrollTo: 4700},
        {links: "Trade Racer (Trading Terminal)", scrollTo: 4800},
        {links: "ICICIDirect Mobile App", scrollTo: 4800},
  
      ]
      
  },
  
  {
    links: "ICICI Direct Pros and Cons",
    scrollTo: 5200,
    sublinks: [
      {links: "ICICI Direct Pros (Advantages)", scrollTo: 5300},
      {links: "ICICI Direct Cons (Disadvantages)", scrollTo: 5900}
    ]
    
},

  {
    links: "ICICI Direct Margin / Exposure",
    scrollTo: 6500,
    sublinks: []
    
}
,
  {
    links: "ICICI Direct Ratings",
    scrollTo: 7200,
    sublinks: []
    
},
{
  links: "Compare ICICI Direct with Top Brokers in India",
  scrollTo: 7800,
  sublinks: []
}
  ]
  broker1
  broker2
  companyData
  brokerList
  companyName = 'ICICI Direct';
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('icici_direct_review').subscribe((doc) => {
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