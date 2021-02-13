import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home-calculator',
  templateUrl: './home-calculator.component.html',
  styleUrls: ['./home-calculator.component.css']
})
export class HomeCalculatorComponent implements OnInit {

  showBrokerageCalculator: boolean = false;

  equityForm = this.fb.group ({

    buyPrice: new FormControl(''),
    sellPrice: new FormControl(''),
    quantity: new FormControl(''),
  
  })

  currencyForm = this.fb.group ({

    buyPrice: new FormControl(''),
    sellPrice: new FormControl(''),
    quantity: new FormControl(''),
    strikePrice: new FormControl('')
  
  })
  commodityForm = this.fb.group ({

    buyPrice: new FormControl(''),
    sellPrice: new FormControl(''),
    quantity: new FormControl(''),
    strikePrice: new FormControl(''),
    commodity: new FormControl('')
  
  })

  brokerageForm = this.fb.group ({

    buyPrice: new FormControl(''),
    sellPrice: new FormControl(''),
    noOfShares: new FormControl(''),
    state: new FormControl(''),
    selectedBroker: new FormControl('')
    
  
  })
  marginForm = this.fb.group ({

    scrip: new FormControl(''),
    availableMargin: new FormControl(''),
    sharePrice: new FormControl(''),
    selectedBroker: new FormControl('')
    // state: new FormControl(''),
    // selectedBroker: new FormControl('')
    
  
  })

  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.changeCalculator('brokerageButton');
  }
  changeCalculator(id) {

  
  }
 
  // profileForm = new FormGroup({
  //   buyPrice: new FormControl(''),
  //   sellPrice: new FormControl(''),
  //   noOfShares: new FormControl(''),
  //   state: new FormControl('')
  // });


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
  
  
  
  submitBrokerageForm() {
    // TODO: Use EventEmitter with form value
    console.warn(this.brokerageForm.value);
  }

  submitMarginForm() {
    console.log(this.marginForm.value);
  }

}
