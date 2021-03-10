import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-compare-broker',
  templateUrl: './compare-broker.component.html',
  styleUrls: ['./compare-broker.component.css']
})
export class CompareBrokerComponent implements OnInit {
  broker1
  broker2
  sub
  allCompanies
  
  constructor(private router: Router, private service: DataService) { }

  ngOnInit() {
    this.allCompanies =this.service.allCompanies;
    console.log('companies', this.allCompanies);
    
  }
  submitCompareForm() {
    console.log('brokers', this.broker1, this.broker2);
    let brokerPath1;
    let brokerPath2;

   
    for( let i = 0; i< this.allCompanies.length; i++) {
      if(this.allCompanies[i].companyName === this.broker1) {
        brokerPath1 = this.allCompanies[i].companyUrl;

     }
     if(this.allCompanies[i].companyName === this.broker2) {
      brokerPath2 = this.allCompanies[i].companyUrl;
   }
     
    }
    
    
    let routePath = brokerPath1 + '-vs-' + brokerPath2;
    console.log('route path2',routePath );
    this.router.navigateByUrl('/compare-brokers/'+ routePath, {queryParams: {compareBrokers: '1'}})
    // this.router.navigate(['/compare-brokers', routePath])
    
  }

}
