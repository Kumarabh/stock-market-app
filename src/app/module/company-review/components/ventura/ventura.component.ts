import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-ventura',
  templateUrl: './ventura.component.html',
  styleUrls: ['./ventura.component.css']
})
export class VenturaComponent implements OnInit {

 
  companyScrollObject = [
    {
      links: "Ventura Stock Trading",
      scrollTo: 100,
      sublinks: []     
    } 
  ]

  companyData
  brokerList
  companyName = 'ventura'
  constructor(private service: CompanyReviewService) {
    this.getCompanyData();
  }

  ngOnInit() {
  }
  
  getCompanyData() {
    this.service.getCompanyData('ventura_review').subscribe((doc) => {
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
