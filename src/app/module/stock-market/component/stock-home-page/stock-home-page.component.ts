import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from 'src/app/module/company-review/company-review.service';

@Component({
  selector: 'app-stock-home-page',
  templateUrl: './stock-home-page.component.html',
  styleUrls: ['./stock-home-page.component.css']
})
export class StockHomePageComponent implements OnInit {

  companyData
  brokerList
  discountBrokerArray: any;
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
    
  }
  
  getCompanyData() {
    this.service.getTopTenDiscountBrokersList().subscribe((doc) => {
      if(doc.exists) {
        // this.companyData = doc.data();
        this.discountBrokerArray = doc.data().brokers;
        console.log('companyData',this.companyData);
      } else {
        console.log('document not exist')
      }
   })
  }


}
