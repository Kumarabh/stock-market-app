import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upstox',
  templateUrl: './upstox.component.html',
  styleUrls: ['./upstox.component.css']
})
export class UpstoxComponent implements OnInit {

  broker1;
  broker2;

  constructor() { }

  ngOnInit() {
  }

  submitCompareForm () {
    console.log('Compare Brokers', this.broker1, this.broker2)
  }
}
