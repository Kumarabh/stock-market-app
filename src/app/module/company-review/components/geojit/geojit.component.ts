import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-geojit',
  templateUrl: './geojit.component.html',
  styleUrls: ['./geojit.component.css']
})
export class GeojitComponent implements OnInit {

  
  companyScrollObject = [
    {
      links: "Geojit BNP Paribas Stock Trading",
      scrollTo: 100,
      sublinks: []
      
    },
    
    {
      links: "Geojit BNP Paribas Charges 2021",
      scrollTo: 900,
      sublinks: [
      {links: "Geojit Brokerage Charges:", scrollTo: 1200},
      {links: "Cash Market Brokerage", scrollTo: 1200},
      {links: "Futures & Options Brokerage", scrollTo: 1400},
      {links: "Geojit Other Brokerage Charges", scrollTo: 1600},
      {links: "Geojit Depository Service Charges", scrollTo: 1800}

      ]
      
    },
    
    {
      links: "Geojit Trading Software (Geojit Trading Platforms)",
      scrollTo: 3000,
      sublinks: [
      {links: "SELFIE Gold", scrollTo: 3200},
      {links: "SELFIE Platinum", scrollTo: 3400}
      
      ]
    },
    {
      links: "Geojit Pros and Cons",
      scrollTo: 3600,
      sublinks: [
      {links: "Geojit Pros (Advantages)", scrollTo: 3600},
      {links: "Geojit Cons (Disadvantages)", scrollTo: 4200},

    ]
      
    },
    {
      links: "Geojit Margin / Exposure",
      scrollTo: 4500,
      sublinks: [
      
      ]
      
  },
  {
    links: "Geojit Ratings",
    scrollTo: 5300,
    sublinks: [
    
    ]
  },
  {
    links: "Compare Geojit with Top Brokers in India",
    scrollTo: 5800,
    sublinks: []
  },
  
  ]

  companyData
  brokerList
  companyName = 'Geojit BNP Paribas'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getCompanyData('geojit_review').subscribe((doc) => {
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
