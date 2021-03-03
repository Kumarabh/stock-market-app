import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-groww',
  templateUrl: './groww.component.html',
  styleUrls: ['./groww.component.css']
})
export class GrowwComponent implements OnInit {
  companyScrollObject = [
    {
      links: "Groww Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
    {
      links: "Key Highlights of Groww",
      scrollTo: 1000,
      sublinks: []
      
    },
    {
      links: "Groww Charges 2021",
      scrollTo: 1300,
      sublinks: [
        {links: "Groww Standard Brokerage Plan", scrollTo: 1300},
      {links: "Other Charges", scrollTo: 1900}
     
      ]
      
    },
    {
      links: "Groww Online Account Opening",
      scrollTo: 2000,
      sublinks: [
        
      ]
      
    },
    {
      links: "Groww Trading Software (Groww Trading Platforms)",
      scrollTo: 2400,
      sublinks: [
      {links: "Groww (Mobile App)", scrollTo: 2600},
      {links: "Groww (Website version)", scrollTo: 2900},
     
      ]
    },
    {
      links: "Groww Pros and Cons",
      scrollTo: 3200,
      sublinks: [
      {links: "Groww Pros (Advantages)", scrollTo: 3200},
      {links: "Groww Cons (Disadvantages)", scrollTo: 4000},

    ]
      
    },
    {
      links: "Groww Margin / Exposure",
      scrollTo: 4500,
      sublinks: [
      
      ]
      
  },
  {
    links: "Groww Ratings",
    scrollTo: 5300,
    sublinks: [
    
    ]
  },
  {
    links: "Compare Groww with Top Brokers in India",
    scrollTo: 5800,
    sublinks: []
  },
  
  ]

  companyData
  brokerList
  companyName = 'Groww'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('groww_review').subscribe((doc) => {
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
