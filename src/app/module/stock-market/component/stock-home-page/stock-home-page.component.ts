import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-stock-home-page',
  templateUrl: './stock-home-page.component.html',
  styleUrls: ['./stock-home-page.component.css']
})
export class StockHomePageComponent implements OnInit {

  companyData
  constructor(private service: DataService) {
  }

  ngOnInit() {
    
  }
  
  


}
