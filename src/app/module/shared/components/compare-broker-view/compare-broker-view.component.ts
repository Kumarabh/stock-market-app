import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-compare-broker-view',
  templateUrl: './compare-broker-view.component.html',
  styleUrls: ['./compare-broker-view.component.css']
})
export class CompareBrokerViewComponent implements OnInit {

  
  shortLinks
  brokerList
  compareBrokers: any;
  broker1Data
  broker2Data

  currentBrokers = {
    broker1: '',
    broker2: ''
  }
  constructor(private route: ActivatedRoute, private service: DataService) {
    this.getShortLinks();
    this.brokerList = this.service.allCompanies;
     this.route.params.subscribe(params => {
      this.currentBrokers.broker1 = params.id.split('-vs-')[0];
      this.currentBrokers.broker2 = params.id.split('-vs-')[1];
      console.log('route params',params);
      console.log('compare brokers',this.currentBrokers);
      this.getBrokersData();
   });
   
  // this.route.queryParams.subscribe(params => {
  //   console.log(params);
    
  //   this.compareBrokers = params['compareBrokers'];
  //         console.log('query params',this.compareBrokers);

  // })
   

   }

  
  ngOnInit() {

    
  }

  
   getBrokersData() {
    this.service.getCompanyData(this.currentBrokers.broker1.replace('-','_')).subscribe((doc) => {
      if(doc.exists) {
        this.broker1Data = doc.data();
        console.log('Broker 1 Data', this.broker1Data);
        
      } else {
        console.log('document not exist')
      }
   })

   this.service.getCompanyData(this.currentBrokers.broker2.replace('-','_')).subscribe((doc) => {
    if(doc.exists) {
      this.broker2Data = doc.data();
      console.log('Broker 2 Data', this.broker2Data);
      
    } else {
      console.log('document not exist')
    }
 })

  }

    getShortLinks() {
    this.service.getUtilitiesData('short_links').subscribe((doc) => {
      if(doc.exists) {
        // this.companyData = doc.data();
        this.shortLinks = doc.data()
        console.log('page data',this.shortLinks);
      } else {
        console.log('document not exist')
      }
   })
  }

 


}
