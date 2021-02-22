import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';
@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {

  specialOffersArray
  constructor(private service: CompanyReviewService) { this.getSpecialOffers();}

  ngOnInit() {
    
  }

  getSpecialOffers() {
    this.service.getSpecialOffers().subscribe((doc) => {
          if(doc.exists) {
            const dataResult = doc.data();
            this.specialOffersArray = dataResult['offers'];
            console.log('special offers',this.specialOffersArray);
          } else {
            console.log('special offers does not exist')
          }
       })
  }
}
