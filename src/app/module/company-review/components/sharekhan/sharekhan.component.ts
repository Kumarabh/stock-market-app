import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-sharekhan',
  templateUrl: './sharekhan.component.html',
  styleUrls: ['./sharekhan.component.css']
})
export class SharekhanComponent implements OnInit {

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
    this.service.getCompanyData('sharekhan_review').subscribe((doc) => {
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
