import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-axis-direct',
  templateUrl: './axis-direct.component.html',
  styleUrls: ['./axis-direct.component.css']
})
export class AxisDirectComponent implements OnInit {

  
  companyScrollObject = [
    {
      links: "Axis Direct Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
    {
      links: "AxisDirect Charges 2021",
      scrollTo: 800,
      sublinks: [
      {links: "Axis Direct Account Opening Charges", scrollTo: 800},
      {links: "Axis Direct Brokerage Charges", scrollTo: 1200},
      {links: "AxisDirect Other Charges (Hidden Fees)", scrollTo: 1900},
      ]
    },
    {
      links: "AxisDirect Trading Software (AxisDirect Trading Platforms)",
      scrollTo: 2200,
      sublinks: [
        {links: "DirectTrade", scrollTo: 2400},
      {links: "Swift Trade", scrollTo: 2400},
      {links: "Mobile Trading", scrollTo: 2600},
      {links: "AxisDirect lite", scrollTo: 2600}
      ]
    },
    {
      links: "AxisDirect Pros and Cons",
      scrollTo: 3000,
      sublinks: [
      {links: "AxisDirect Pros (Advantages)", scrollTo: 3100},
      {links: "AxisDirect Cons (Disadvantages)", scrollTo: 3200},

    ]
      
    },
    {
      links: "AxisDirect Margin / Exposure",
      scrollTo: 4300,
      sublinks: [
      
      ]
      
  },
  {
    links: "Axis Direct Ratings",
    scrollTo: 4400,
    sublinks: [
    
    ]
  },
  {
    links: "Compare Axis Direct with Top Brokers in India",
    scrollTo: 4900,
    sublinks: []
  },
  
  ]
  broker1
  broker2
  companyData
  brokerList
  companyName = 'Axis Direct'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('axis_direct_review').subscribe((doc) => {
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
