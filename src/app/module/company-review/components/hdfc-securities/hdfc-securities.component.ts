import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-hdfc-securities',
  templateUrl: './hdfc-securities.component.html',
  styleUrls: ['./hdfc-securities.component.css']
})
export class HdfcSecuritiesComponent implements OnInit {

  companyScrollObject = [
    {
      links: "HDFC Securities Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
    {
      links: "Features on HDFC Securities Online trading",
      scrollTo: 500,
      sublinks: []
    },
    {
      links: "HDFC 3-in-1 Account",
      scrollTo: 1000,
      sublinks: []
    },
    {
      links: "HDFC Securities Charges 2021",
      scrollTo: 1300,
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
    this.service.getCompanyData('hdfc_securities_review').subscribe((doc) => {
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
