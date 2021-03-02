import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-anand-rathi',
  templateUrl: './anand-rathi.component.html',
  styleUrls: ['./anand-rathi.component.css']
})
export class AnandRathiComponent implements OnInit {

  
  companyScrollObject = [
    {
      links: "Anand Rathi Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
    {
      links: "Anand Rathi Charges 2021",
      scrollTo: 800,
      sublinks: []
      
    },
    {
      links: "Anand Rathi Online Account Opening",
      scrollTo: 1200,
      sublinks: [
      
      ]
    },
    {
      links: "Anand Rathi Trading Software ",
      scrollTo: 1500,
      sublinks: [
      {links: "Trade Lite", scrollTo: 1500},
      {links: "Trade X'press", scrollTo: 1500},
      {links: "Trade X'pro", scrollTo: 1600},
      {links: "Trade X'pro+", scrollTo: 1800},
      {links: "Trade Flexi", scrollTo: 2700},
      {links: "Trade On Move", scrollTo: 2800},
      {links: "Trade Mobi", scrollTo: 2900}
      ]
    },
    {
      links: "Anand Rathi Pros and Cons",
      scrollTo: 3300,
      sublinks: [
      {links: "Anand Rathi Pros (Advantages)", scrollTo: 3400},
      {links: "Anand Rathi Cons (Disadvantages)", scrollTo: 3900},

    ]
      
    },
    {
      links: "Anand Rathi Margin / Exposure",
      scrollTo: 4200,
      sublinks: [
      
      ]
      
  },
  {
    links: "Anand Rathi Ratings",
    scrollTo: 4900,
    sublinks: [
    
    ]
  },
  {
    links: "Compare Anand Rathi with Top Brokers in India",
    scrollTo: 5500,
    sublinks: []
  },
  
  ]
  broker1
  broker2
  companyData
  brokerList
  companyName = 'Anand Rathi'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('anand_rathi_review').subscribe((doc) => {
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
