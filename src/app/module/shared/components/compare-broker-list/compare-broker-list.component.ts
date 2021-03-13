import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-compare-broker-list',
  templateUrl: './compare-broker-list.component.html',
  styleUrls: ['./compare-broker-list.component.css']
})
export class CompareBrokerListComponent implements OnInit {

  brokerList
  // companyName
  @Input('companyName') companyName: string;
  @Input('companyUrl') companyUrl: string;

  constructor(private service: DataService) { }

  ngOnInit() {
    console.log('all companies',this.service.allCompanies)
    // this.getBrokerList();
    this.brokerList = this.service.allCompanies;
  }

}
