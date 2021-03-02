import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-sbi-securities',
  templateUrl: './sbi-securities.component.html',
  styleUrls: ['./sbi-securities.component.css']
})
export class SbiSecuritiesComponent implements OnInit {

  companyScrollObject = [
    {
      links: "SBI Securities Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
    {
      links: "Key Facts about SBICAP Securities",
      scrollTo: 800,
      sublinks: []
      
    },
    {
      links: "SBI Securities Trading Software",
      scrollTo: 1400,
      sublinks: [
      
      ]
    },
    {
      links: "SBI Securities Charges 2021",
      scrollTo: 2200,
      sublinks: [
      {links: "Trading Brokerages", scrollTo: 2400},
      {links: "SBICAP Securities Brokerage / Charges", scrollTo: 2600},
      {links: "SBICAP Securities Brokerage / Charges", scrollTo: 3200},
     
      ]
    },
    {
      links: "Useful Articles",
      scrollTo: 3700,
      sublinks: [
      
      ]
    },
    {
      links: "SBI Securities Pros and Cons",
      scrollTo: 3900,
      sublinks: [
        {links: "SBI Securities Pros (Advantages)", scrollTo: 3900},
        {links: "SBI Securities Cons (Disadvantages)", scrollTo: 4500},
    ]
      
    },
    {
      links: "SBI Securities Margin / Exposure",
      scrollTo: 4800,
      sublinks: [
      
      ]
      
  },
  {
    links: "SBI Securities Ratings",
    scrollTo: 5500,
    sublinks: [
    
    ]
  },
  {
    links: "Compare SBI Securities with Top Brokers in India",
    scrollTo: 6000,
    sublinks: []
  },
  
  ]
  broker1
  broker2
  companyData
  brokerList
  companyName = 'SBI Securities'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('sbi_securities_review').subscribe((doc) => {
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
