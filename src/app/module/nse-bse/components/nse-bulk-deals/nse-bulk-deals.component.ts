import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-nse-bulk-deals',
  templateUrl: './nse-bulk-deals.component.html',
  styleUrls: ['./nse-bulk-deals.component.css']
})
export class NseBulkDealsComponent implements OnInit {

  pageData
  constructor(private service: DataService) { 
    this.getPageData();
  }

  ngOnInit() {
    this.service.pageData('nse_bulk_deals')
    
  }

  getPageData() {
    this.service.pageData('nse_bulk_deals').subscribe((doc) => {
      if(doc.exists) {
        this.pageData = doc.data();
        console.log('Nse Bulk Deals Page Data');
        
        
      } else {
        console.log('document not exist')
      }
   })
  }
}
