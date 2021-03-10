import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-more-service-brokers',
  templateUrl: './more-service-brokers.component.html',
  styleUrls: ['./more-service-brokers.component.css']
})
export class MoreServiceBrokersComponent implements OnInit {

  selectedServiceBroker
  serviceBrokerListArray
  constructor(private router: Router, private service: DataService) {
    this.serviceBrokerListArray = this.service.allCompanies;
   }

  ngOnInit() {
  }

  onSubmit() {

  }
  navigateToUrl() {
    console.log('navigate to:', this.selectedServiceBroker);
    
    this.serviceBrokerListArray.forEach(element => {
      if(element.companyName === this.selectedServiceBroker) {
        this.router.navigateByUrl('/review/'+ element.companyUrl);
      }
    });
  }

 

}
