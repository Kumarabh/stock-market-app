import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-page-scroll',
  templateUrl: './company-page-scroll.component.html',
  styleUrls: ['./company-page-scroll.component.css']
})
export class CompanyPageScrollComponent implements OnInit {

  @Input('companyScrollObject') companyScrollObject: Object
  constructor() { }

  ngOnInit() {
  }
  scrollTo(x,y) {
    window.scrollTo(x,y);
  }

}
