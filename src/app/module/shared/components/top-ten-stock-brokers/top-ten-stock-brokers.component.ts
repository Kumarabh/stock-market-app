import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-top-ten-stock-brokers',
  templateUrl: './top-ten-stock-brokers.component.html',
  styleUrls: ['./top-ten-stock-brokers.component.css']
})
export class TopTenStockBrokersComponent implements OnInit {
  
  discountBrokerArray
  constructor(private service: DataService) { 
    this.getUtilitiesData();

  }

  ngOnInit() {
  }
  getUtilitiesData() {
    this.service.getUtilitiesData('top_10_discount_brokers').subscribe((doc) => {
      if(doc.exists) {
        this.discountBrokerArray = doc.data().brokers;
      } else {
        console.log('document not exist')
      }
   })
  }
}
