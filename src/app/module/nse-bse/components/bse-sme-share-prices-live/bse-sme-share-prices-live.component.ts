import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-bse-sme-share-prices-live',
  templateUrl: './bse-sme-share-prices-live.component.html',
  styleUrls: ['./bse-sme-share-prices-live.component.css']
})
export class BseSmeSharePricesLiveComponent implements OnInit {

 
  pageData
  constructor(private service: DataService) { 
    this.getPageData();
  }

  ngOnInit() {
    // this.service.pageData('nse_bulk_deals')
    
  }

  getPageData() {
    this.service.pageData('bse_sme_share_price').subscribe((doc) => {
      if(doc.exists) {
        this.pageData = doc.data();
        console.log('Nse Bulk Deals Page Data');
        
        
      } else {
        console.log('document not exist')
      }
   })
  }

  

}
