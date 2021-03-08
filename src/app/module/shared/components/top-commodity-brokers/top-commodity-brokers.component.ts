import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-top-commodity-brokers',
  templateUrl: './top-commodity-brokers.component.html',
  styleUrls: ['./top-commodity-brokers.component.css']
})
export class TopCommodityBrokersComponent implements OnInit {

  topCommodityBrokers
  constructor(private service: DataService) { 
    this.getUtilitiesData();

  }

  ngOnInit() {
  }
  getUtilitiesData() {
    this.service.getUtilitiesData('top_commodity_brokers').subscribe((doc) => {
      if(doc.exists) {
        this.topCommodityBrokers = doc.data().data;
      } else {
        console.log('document not exist')
      }
   })
  }
}
