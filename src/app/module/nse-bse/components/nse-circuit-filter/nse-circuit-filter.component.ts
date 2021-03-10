import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-nse-circuit-filter',
  templateUrl: './nse-circuit-filter.component.html',
  styleUrls: ['./nse-circuit-filter.component.css']
})
export class NseCircuitFilterComponent implements OnInit {

  pageData
  circuitArray
  filterType
  constructor(private service: DataService) { 
    this.getPageData();
  }

  ngOnInit() {
    // this.service.pageData('nse_bulk_deals')
    
  }

  loadFilter(filterType) {
    this.circuitArray = this.pageData[filterType];
    this.filterType = this.pageData[filterType][0].filter_type
  }
  getPageData() {
    this.service.pageData('nse_circuit_filter').subscribe((doc) => {
      if(doc.exists) {
        this.pageData = doc.data();
        console.log('pagedata', this.pageData);
        
        this.circuitArray = this.pageData['percent5'];
        this.filterType = this.pageData['percent5'][0].filter_type
        console.log('Nse Bulk Deals Page Data');
        
        
      } else {
        console.log('document not exist')
      }
   })
  }

}
