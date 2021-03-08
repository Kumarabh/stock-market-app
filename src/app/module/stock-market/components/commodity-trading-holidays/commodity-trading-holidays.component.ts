import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-commodity-trading-holidays',
  templateUrl: './commodity-trading-holidays.component.html',
  styleUrls: ['./commodity-trading-holidays.component.css']
})
export class CommodityTradingHolidaysComponent implements OnInit {

  
  companyData
  pageData
  constructor(private service: DataService) {
    this.getPageData();
  }

  ngOnInit() {
    
  }
  
  getPageData() {
    this.service.pageData('commodity_trading_holidays').subscribe((doc) => {
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
