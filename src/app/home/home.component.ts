import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  traderData
  showCalculator: Boolean = false ;
  constructor(private service: DataService) { }

  ngOnInit() {
    // this.service.setCompany();
    this.traderData = this.service.getTradersData().subscribe(snapshots => {
      snapshots.docs.map(doc => {
        console.log(doc.data());
    })
    });
   
  }

}
