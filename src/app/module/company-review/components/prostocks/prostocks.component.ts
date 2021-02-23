import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-prostocks',
  templateUrl: './prostocks.component.html',
  styleUrls: ['./prostocks.component.css']
})
export class ProstocksComponent implements OnInit {

  
  broker1
  broker2
  companyData
  brokerList
  companyName
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
    this.getBrokerList();
  }

  ngOnInit() {
    
  }
  getBrokerList() {
    this.service.brokerList().subscribe((doc) => {
          if(doc.exists) {
            this.brokerList = doc.data();
            console.log('brokerlist',this.brokerList);
          } else {
            console.log('document not exist')
          }
       })
  }
  getCompanyData() {
     
    this.service.getCompanyData('prostocks_review').subscribe((doc) => {
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
