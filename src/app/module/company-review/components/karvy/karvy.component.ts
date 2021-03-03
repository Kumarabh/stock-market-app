import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-karvy',
  templateUrl: './karvy.component.html',
  styleUrls: ['./karvy.component.css']
})
export class KarvyComponent implements OnInit {

  companyScrollObject = [
    {
      links: "Karvy Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
    
    {
      links: "Karvy Charges 2021",
      scrollTo: 800,
      sublinks: [
        {links: "Karvy brokerage plans: Basic Plan", scrollTo: 1000},
      {links: "Karvy Brokerage Charges in Detail (Equity Delivery/ Equity Intraday)", scrollTo: 1500},
      {links: "Karvy Brokerage Charges in Detail (Futures/ Options)", scrollTo: 2000},
      {links: "Karvy Brokerage Charges in Detail (Currency Futures/ Currency Options)", scrollTo: 2500},
      {links: "Karvy Brokerage Charges in Detail (Commodity Futures)", scrollTo: 3000}

      ]
      
    },
    {
      links: "Karvy Charge Structure Explanation",
      scrollTo: 3500,
      sublinks: []
      
    },
    {
      links: "Useful Articles",
      scrollTo: 3900,
      sublinks: []
      
    },
    {
      links: "Karvy Depository Service Charges",
      scrollTo: 4200,
      sublinks: []
      
    },
    {
      links: "Karvy Trading Software (Karvy Trading Platforms)",
      scrollTo: 5000,
      sublinks: [
      {links: "Karvy Online Web", scrollTo: 5000},
      {links: "KarvyOnline Mobile Trading App", scrollTo: 5200},
      {links: "Karvy Nest Trder", scrollTo: 5400},
      
      ]
    },
    {
      links: "Karvy Pros and Cons",
      scrollTo: 5800,
      sublinks: [
      {links: "Karvy Pros (Advantages)", scrollTo: 5800},
      {links: "Karvy Cons (Disadvantages)", scrollTo: 6300},

    ]
      
    },
    {
      links: "Karvy Margin / Exposure",
      scrollTo: 6600,
      sublinks: [
      
      ]
      
  },
  {
    links: "Karvy Ratings",
    scrollTo: 7400,
    sublinks: [
    
    ]
  },
  {
    links: "Karvy Fyers with Top Brokers in India",
    scrollTo: 8000,
    sublinks: []
  },
  
  ]

  companyData
  brokerList
  companyName = 'Karvy'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('karvy_review').subscribe((doc) => {
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
