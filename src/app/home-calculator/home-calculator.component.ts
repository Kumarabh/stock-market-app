import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home-calculator',
  templateUrl: './home-calculator.component.html',
  styleUrls: ['./home-calculator.component.css']
})
export class HomeCalculatorComponent implements OnInit {

  
  showBrokerageCalculator: boolean = false;
  allBrokers
  searchText
  selectedBrokerProp = 'CHOOSE A BROKER'
  equityForm = this.fb.group ({

    buyPrice: new FormControl(''),
    sellPrice: new FormControl(''),
    quantity: new FormControl(''),
  
  })
  currencyFuturesForm = this.fb.group ({

    buyPrice: new FormControl(''),
    sellPrice: new FormControl(''),
    quantity: new FormControl(''),
    // strikePrice: new FormControl('')
  
  })
  currencyOptionsForm = this.fb.group ({

    buyPrice: new FormControl(''),
    sellPrice: new FormControl(''),
    quantity: new FormControl(''),
    strikePrice: new FormControl('')
  
  })
  commodityFuturesForm = this.fb.group ({

    buyPrice: new FormControl(''),
    sellPrice: new FormControl(''),
    quantity: new FormControl(''),
    commodity: new FormControl('')
  
  })
  commodityOptionsForm = this.fb.group ({

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

  
  constructor(private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.changeCalculator('brokerageButton');
    this.getAllBrokers();
  }
  
  changeCalculator(id) {
  
  }
  getAllBrokers(){
    this.service.getAllBrokers().subscribe(data=>{
      this.allBrokers = data;
      this.allBrokers = this.allBrokers[0].allBrokers
  })

  }
  selectedBroker(event){
    this.selectedBrokerProp = event.brokerName;
    console.log('selected value event',event);
    // this.EquityDeliveryForm.controls['broker'].setValue(event)
    // this.getBrokerShortInfo(event.brokerId);
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
  
  submitEquityForm() {
    // TODO: Use EventEmitter with form value 
    console.warn('Equity Form', this.equityForm.value);
  }
  submitCurrencyFuturesForm() {
    // TODO: Use EventEmitter with form value submitCurrencyOptionsForm
    console.warn('Currency Futures Form', this.currencyFuturesForm.value);
  }

  submitCurrencyOptionsForm() {
    // TODO: Use EventEmitter with form value submitCurrencyOptionsForm
    console.warn('Currency Options Form', this.currencyOptionsForm.value);
  }

  
  submitCommodityFuturesForm() {
    // TODO: Use EventEmitter with form value submitCurrencyOptionsForm
    console.warn('Commodity Futures Form', this.commodityFuturesForm.value);
  }

  submitCommodityOptionsForm() {
    // TODO: Use EventEmitter with form value submitCurrencyOptionsForm
    console.warn('Commodity Options Form', this.commodityOptionsForm.value);
  }

  submitBrokerageForm() {
    // TODO: Use EventEmitter with form value
    console.warn(this.brokerageForm.value);
  }

  submitMarginForm() {
    console.log(this.marginForm.value);
  }

}
