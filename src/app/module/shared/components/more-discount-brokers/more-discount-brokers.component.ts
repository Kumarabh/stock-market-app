import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-more-discount-brokers',
  templateUrl: './more-discount-brokers.component.html',
  styleUrls: ['./more-discount-brokers.component.css']
})
export class MoreDiscountBrokersComponent implements OnInit {
  selectedDiscountBroker
  discountBrokerListArray
  constructor(private router: Router, private service: DataService) { 
    this.discountBrokerListArray = this.service.allCompanies;
  }

  ngOnInit() {
  }

  onSubmit() {

  }
  navigateToUrl() {
    console.log('navigate to:', this.selectedDiscountBroker);
    
    this.discountBrokerListArray.forEach(element => {
      if(element.companyName === this.selectedDiscountBroker) {
        this.router.navigateByUrl('/review/'+ element.companyUrl);
      }
    });
  }
 

}
