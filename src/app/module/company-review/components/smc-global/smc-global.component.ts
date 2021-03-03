import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-smc-global',
  templateUrl: './smc-global.component.html',
  styleUrls: ['./smc-global.component.css']
})
export class SmcGlobalComponent implements OnInit {

  
  companyScrollObject = [
    {
      links: "SMC Global Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
   
    
    {
      links: "SMC Global Trading Software ",
      scrollTo: 800,
      sublinks: [
      {links: "Browser based", scrollTo: 1000},
      {links: "Software based", scrollTo: 1400},
      {links: "Mobile based", scrollTo: 1700},
      
      ]
    },
    {
      links: "SMC Global Pros and Cons",
      scrollTo: 2500,
      sublinks: [
      {links: "SMC Global Pros (Advantages)", scrollTo: 2500},
      {links: "SMC Global Cons (Disadvantages)", scrollTo: 3000},

    ]
      
    },
    {
      links: "SMC Global Margin / Exposure",
      scrollTo: 3300,
      sublinks: [
      
      ]
      
  },
  {
    links: "SMC Global Ratings",
    scrollTo: 4100,
    sublinks: [
    
    ]
  },
  {
    links: "Compare SMC Global with Top Brokers in India",
    scrollTo: 4600,
    sublinks: []
  },
  
  ]

  companyData
  brokerList
  companyName = 'SMC Global'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('smc_global_review').subscribe((doc) => {
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
