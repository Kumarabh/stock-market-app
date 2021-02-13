import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-compare-broker',
  templateUrl: './compare-broker.component.html',
  styleUrls: ['./compare-broker.component.css']
})
export class CompareBrokerComponent implements OnInit {

  compareBrokerForm = this.fb.group ({

    broker1: new FormControl(''),
    broker2: new FormControl('')
    
    // state: new FormControl(''),
    // selectedBroker: new FormControl('')
    
  
  })
  constructor(private fb: FormBuilder) { }
 

  ngOnInit() {
  }

  submitCompareForm (compareBrokerForm) {
    console.log('Compare Brokers', this.compareBrokerForm.value)
  }
}
