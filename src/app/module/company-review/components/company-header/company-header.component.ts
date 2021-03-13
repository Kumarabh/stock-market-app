import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.css']
})
export class CompanyHeaderComponent implements OnInit {

  @Input('companyName') companyName: string;
  constructor(private service: DataService) { }
  shortLinks
  ngOnInit() {
    this.getShortLinks();
  }
  getShortLinks() {
    this.service.pageData('stock_market_home').subscribe((doc) => {
      if(doc.exists) {
        // this.companyData = doc.data();
        this.shortLinks = doc.data()
        console.log('shortLinks',this.shortLinks);
      } else {
        console.log('document not exist')
      }
   })
  }
}
