import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-fyers',
  templateUrl: './fyers.component.html',
  styleUrls: ['./fyers.component.css']
})
export class FyersComponent implements OnInit {

  
  companyScrollObject = [
    {
      links: "Fyers Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
    {
      links: "Thematic Investing at FYERS",
      scrollTo: 700,
      sublinks: []
      
    },
    {
      links: "Fyers Charges 2021",
      scrollTo: 1300,
      sublinks: [
        {links: "Fyers Equity Brokerage Charges", scrollTo: 1800},
      {links: "Fyers F&O Brokerage Charges", scrollTo: 2300},
      {links: "Fyers Fee Structure", scrollTo: 2900},
      {links: "Other Charges", scrollTo: 3200}

      ]
      
    },
    
    {
      links: "Fyers Trading Software",
      scrollTo: 3500,
      sublinks: [
      {links: "Fyers One (Trading Terminal)", scrollTo: 3800},
      {links: "Fyers Markets (Mobile Trading App)", scrollTo: 4000},
      {links: "Fyers Web Trader", scrollTo: 4200},
      
      ]
    },
    {
      links: "Fyers Pros and Cons",
      scrollTo: 4500,
      sublinks: [
      {links: "Fyers Pros (Advantages)", scrollTo: 4500},
      {links: "Fyers Cons (Disadvantages)", scrollTo: 5200},

    ]
      
    },
    {
      links: "Fyers Margin / Exposure",
      scrollTo: 5500,
      sublinks: [
      
      ]
      
  },
  {
    links: "Fyers Ratings",
    scrollTo: 6200,
    sublinks: [
    
    ]
  },
  {
    links: "Compare Fyers with Top Brokers in India",
    scrollTo: 6800,
    sublinks: []
  },
  
  ]

  companyData
  brokerList
  companyName = 'Fyers'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('fyers_review').subscribe((doc) => {
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
