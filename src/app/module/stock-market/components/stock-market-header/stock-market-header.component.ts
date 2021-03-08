import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stock-market-header',
  templateUrl: './stock-market-header.component.html',
  styleUrls: ['./stock-market-header.component.css']
})
export class StockMarketHeaderComponent implements OnInit {

  pageData
  constructor(private service: DataService) { 
    this.getPageData();
  }

  ngOnInit() {
  }

  getPageData() {
    this.service.pageData('stock_market_home').subscribe((doc) => {
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
