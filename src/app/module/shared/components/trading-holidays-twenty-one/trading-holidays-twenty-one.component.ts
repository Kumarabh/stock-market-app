import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-trading-holidays-twenty-one',
  templateUrl: './trading-holidays-twenty-one.component.html',
  styleUrls: ['./trading-holidays-twenty-one.component.css']
})
export class TradingHolidaysTwentyOneComponent implements OnInit {

  constructor(private service: DataService) { 
    this.getPageData()
  }
  pageData
  ngOnInit() {
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
