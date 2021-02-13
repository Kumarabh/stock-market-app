import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  brokerageCalculatedAmount = {
    totalTurmover:0,
    brokerage: 0,
    stt: 0,
    sebiTurnoverFees: 0,
    stampDuty: 0,
    transactionCharges: 0,
    gst: 0,
    totalBrokerage: 0,
    totalProfitOrLoss: 0


  } 
  title = 'appdemo';
}
