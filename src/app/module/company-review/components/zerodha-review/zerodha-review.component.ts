import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';
@Component({
  selector: 'app-zerodha-review',
  templateUrl: './zerodha-review.component.html',
  styleUrls: ['./zerodha-review.component.css']
})
export class ZerodhaReviewComponent implements OnInit {

  companyData
  companyName = 'Zerodha'
  companyCode = 'zerodha'
  constructor(private service: CompanyReviewService) {
    
  }

  ngOnInit() {
    console.log('FETCH Company code', this.companyCode);
    this.getCompareData(this.companyCode);
  }
  
  getCompareData(companyCode) {
    this.service.getCompareData(companyCode).subscribe((doc) => {
      if(doc.exists) {
        this.companyData = doc.data();
        // this.companyName = this.companyData.about.broker_name;
        console.log('companyData',this.companyData);
      } else {
        console.log('document not exist')
      }
   })
  }
  companyScrollObject = [
    {
      links: "Zerodha Stock Trading",
      scrollTo: 100,
      sublinks: [
       
      ]
      
    },
    {
      links: "Account Types",
      scrollTo: 1200,
      sublinks: [
        {links: "Per Order Executed", scrollTo: 1200},
        {links: "Standard Brokerage", scrollTo: 1200},
       
      ]
    },
    {
      links: "Zerodha Online Account Opening",
      scrollTo: 6200,
      sublinks: []
    },
    
    {
      links: "Zerodha Charges 2021",
      scrollTo: 2500,
      sublinks: [
      {links: "Zerodha Account Opening Charges", scrollTo: 2600},
      {links: "Zerodha Brokerage Charges 2020", scrollTo: 2800},
      {links: "Zerodha Equity Charges", scrollTo: 4300},
      {links: "Zerodha F&O Charges", scrollTo: 2600},
      {links: "Zerodha Currency Charges", scrollTo: 2800},
      {links: "Zerodha Commodities Charges", scrollTo: 4300},

    ]
      
    },
    {
      links: "Zerodha Fee Structure",
      scrollTo: 5000,
      sublinks: [
      
      ]
      
  },
  {
    links: "Zerodha Trading Software (Zerodha Trading Platforms)",
    scrollTo: 5300,
    sublinks: [
      {links: "Kite 3.0 (Web-based Trading Platform)", scrollTo: 2600},
      {links: "Kite Android/ Kite iOS (Mobile Trading App)", scrollTo: 2800},
      {links: "Zerodha Console", scrollTo: 4300},
      {links: "Zerodha Sentinel (Price Alert Tool)", scrollTo: 2600},
      {links: "Zerodha Coin (Mutual Fund Investments)", scrollTo: 2800},

    ]
  },
  
  {
    links: "Zerodha Pros and Cons",
    scrollTo: 7400,
    sublinks: [
      {links: "Zerodha Pros (Advantages)", scrollTo: 7400},
      {links: "Zerodha Cons (Disadvantages)", scrollTo: 7700}
    ]
    
},

  {
    links: "Zerodha Margin / Exposure",
    scrollTo: 8100,
    sublinks: []
    
}
,
  {
    links: "Zerodha Ratings",
    scrollTo: 8900,
    sublinks: []
    
},
{
  links: "Compare Zerodha with Top Brokers in India",
  scrollTo: 9400,
  sublinks: []
}
  ]



}
