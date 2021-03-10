import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-nse-sme-share-prices-live',
  templateUrl: './nse-sme-share-prices-live.component.html',
  styleUrls: ['./nse-sme-share-prices-live.component.css']
})
export class NseSmeSharePricesLiveComponent implements OnInit {

  
  pageData
  constructor(private service: DataService) { 
    this.getPageData();
  }

  ngOnInit() {
    // this.service.pageData('nse_bulk_deals')
    
  }

  getPageData() {
    this.service.pageData('nse_sme_share_price').subscribe((doc) => {
      if(doc.exists) {
        this.pageData = doc.data();
        console.log('Nse Bulk Deals Page Data');
        
        
      } else {
        console.log('document not exist')
      }
   })
  }

  

}
