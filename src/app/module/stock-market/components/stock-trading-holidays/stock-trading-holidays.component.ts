import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stock-trading-holidays',
  templateUrl: './stock-trading-holidays.component.html',
  styleUrls: ['./stock-trading-holidays.component.css']
})
export class StockTradingHolidaysComponent implements OnInit {

  pageData
  discountBrokerArray
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getPageData();
  }

  getPageData() {
    this.service.pageData('stock_trading_holidays').subscribe((doc) => {
      if(doc.exists) {
        // this.companyData = doc.data();
        this.pageData = doc.data()
        console.log('page data',this.pageData);
      } else {
        console.log('document not exist')
      }
   })
  }

 


}
