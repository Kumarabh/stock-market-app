import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cheapest-commodity-brokers',
  templateUrl: './cheapest-commodity-brokers.component.html',
  styleUrls: ['./cheapest-commodity-brokers.component.css']
})
export class CheapestCommodityBrokersComponent implements OnInit {

  cheapestBrokersArray
  constructor(private service: DataService) { 
    this.getUtilitiesData();

  }

  ngOnInit() {
  }
  getUtilitiesData() {
    this.service.getUtilitiesData('cheapest_commodity_brokers').subscribe((doc) => {
      if(doc.exists) {
        this.cheapestBrokersArray = doc.data().data;
      } else {
        console.log('document not exist')
      }
   })
  }

}
