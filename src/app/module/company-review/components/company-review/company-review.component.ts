import { Component, Input, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-company-review',
  templateUrl: './company-review.component.html',
  styleUrls: ['./company-review.component.css']
})
export class CompanyReviewComponent implements OnInit {

  @Input('companyCode') companyCode: any;
  @Input('companyName') companyName: any;
  @Input('companyUrl') companyUrl: any;

  companyScrollObject = [
    {
      links: 'Stock Trading',
      scrollTo: 100,
      sublinks: []     
    } 
  ]

  companyData
  

  constructor(private service: CompanyReviewService) {
    
  }

  ngOnInit() {
    console.log('FETCH Company code', this.companyCode);
    this.getCompareData(this.companyCode);
  }
  
  getCompareData(companyCode) {
    this.service.getCompareData(companyCode).subscribe((doc) => {
      if(doc.exists) {
        this.companyData = doc.data();
        // this.companyName = this.companyData.about.broker_name;
        console.log('companyData',this.companyData);
      } else {
        console.log('document not exist')
      }
   })
  }


}
