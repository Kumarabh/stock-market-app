import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-gcl-securities',
  templateUrl: './gcl-securities.component.html',
  styleUrls: ['./gcl-securities.component.css']
})
export class GclSecuritiesComponent implements OnInit {

  
  companyScrollObject = [
    {
      links: "GCL Securities Stock Trading",
      scrollTo: 100,
      sublinks: []     
    } 
  ]

  companyData
  brokerList
  companyName = 'GCL Securities'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
  }
  
  getCompanyData() {
    this.service.getCompanyData('gcl_securities_review').subscribe((doc) => {
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
