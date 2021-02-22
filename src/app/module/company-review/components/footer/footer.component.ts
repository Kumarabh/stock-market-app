import { Component, Input, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  brokerList
  // companyName
  @Input('companyName') companyName: string;
  constructor(private service: CompanyReviewService) { }

  ngOnInit() {
    console.log(this.companyName)
    this.getBrokerList();
  }

 getBrokerList() {
    this.service.brokerList().subscribe((doc) => {
          if(doc.exists) {
            this.brokerList = doc.data();
            console.log('brokerlist',this.brokerList);
          } else {
            console.log('document not exist')
          }
       })
  }
}
