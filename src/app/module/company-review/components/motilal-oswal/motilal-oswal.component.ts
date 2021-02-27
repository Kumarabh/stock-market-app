import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-motilal-oswal',
  templateUrl: './motilal-oswal.component.html',
  styleUrls: ['./motilal-oswal.component.css']
})
export class MotilalOswalComponent implements OnInit {

  companyScrollObject = [
    {
      links: "Motilal Oswal Stock Trading",
      scrollTo: 100,
      sublinks: [
      ]
      
    },
    {
      links: "Account Types",
      scrollTo: 900,
      sublinks: [
        {links: "Default Account", scrollTo: 1000},
        {links: "Value Pack", scrollTo: 1500},
        {links: "Margin Pack", scrollTo: 2500},
       

      ]
    },
    
    {
      links: "Motilal Oswal Charges 2021",
      scrollTo: 4200,
      sublinks: [
        
    ]
      
    },
    {
      links: "Trading Brokerage",
      scrollTo: 4700,
      sublinks: [
        {links: "Default Brokerage Plan", scrollTo: 4700},
        {links: "Value Pack Plan", scrollTo: 4800},
        {links: "Motilal Value Pack Scheme Detail", scrollTo: 4800},
        {links: "Margin Scheme", scrollTo: 4800},
        {links: "Motilal Oswal Margin Scheme Brokerage", scrollTo: 4800},
        {links: "Motilal Oswal - Margin Scheme Charges", scrollTo: 4800},
        {links: "Motilal Oswal - Margin Scheme Charges", scrollTo: 4800},
        {links: "Motilal Demat Charges", scrollTo: 4800},
  
      ]
      
  },
  
  {
    links: "Motilal Oswal Online Account Opening",
    scrollTo: 5200,
    sublinks: [
      
    ]
    
},

  {
    links: "Motilal Oswal Trading Software",
    scrollTo: 6500,
    sublinks: [
      {links: "ICICI Direct Pros (Advantages)", scrollTo: 5300},
      {links: "ICICI Direct Cons (Disadvantages)", scrollTo: 5900}
    ]
    
}
,
  {
    links: "Motilal Oswal Pros and Cons",
    scrollTo: 7200,
    sublinks: [
      {links: "Motilal Oswal Pros (Advantages)", scrollTo: 5300},
      {links: "Motilal Oswal Cons (Disadvantages)", scrollTo: 5900}
    ]
    
},
{
  links: "Kotak Securities Margin / Exposure",
  scrollTo: 7800,
  sublinks: []
}
,
{
  links: "Motilal Oswal Ratings",
  scrollTo: 7800,
  sublinks: []
}
,
{
  links: "6 Reasons to Open Account with Motilal Oswal",
  scrollTo: 7800,
  sublinks: [
    {links: "Leading Broker in India", scrollTo: 5300},
      {links: "Research Servies", scrollTo: 5900},
      {links: "Advisory Services", scrollTo: 5300},
      {links: "Technology", scrollTo: 5900},
      {links: "Product & Services", scrollTo: 5300},
      {links: "Operational Efficiency", scrollTo: 5900}
  ]
}
,
{
  links: "Compare Motilal Oswal with Top Brokers in India",
  scrollTo: 7800,
  sublinks: []
}
  ]
  broker1
  broker2
  companyData
  brokerList
  companyName = 'Motilal Oswal';
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('motilal_oswal_review').subscribe((doc) => {
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
