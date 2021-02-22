import { Component, OnInit } from '@angular/core';
import { CompanyReviewService } from '../../company-review.service';

@Component({
  selector: 'app-upstox',
  templateUrl: './upstox.component.html',
  styleUrls: ['./upstox.component.css']
})
export class UpstoxComponent implements OnInit {

  broker1;
  broker2;
  tradingPlansComparisonObject
  companyBasicDetailsObject
  equityDeliveryAndIntradayCharges: any;
  currencyCharges
  commodityCharges
  equityFandOCharges: any;
  marginExposure: any;
  brokerList
  companyName
  constructor(private service: CompanyReviewService) {
    this.getUpstoxTradingPlansComparison();
    this.getCompanyBasicDetails();
    this.getEquityDeliveryAndIntradayCharges();
    this.getEquityFandOcharges();
    this.getUpstoxCurrencyCharges();
    this.getUpstoxCommodityCharges();
    this.getMarginExposure();
    this.getBrokerList();
   }

  ngOnInit() {
   
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
  getUpstoxCommodityCharges() {
    this.service.upstoxCommodityCharges().subscribe((doc) => {
          if(doc.exists) {
            this.commodityCharges = doc.data();
            console.log('commodity charges',this.commodityCharges);
          } else {
            console.log('document not exist')
          }
       })
  }


  getUpstoxCurrencyCharges() {
    this.service.upstoxCurrencyCharges().subscribe((doc) => {
          if(doc.exists) {
            this.currencyCharges = doc.data();
            console.log('currency charges',this.currencyCharges);
          } else {
            console.log('document not exist')
          }
       })
  }

  getUpstoxTradingPlansComparison() {
    this.service.getUpstoxTradingPlansComparison().subscribe((doc) => {
          if(doc.exists) {
            this.tradingPlansComparisonObject = doc.data();
            console.log(this.tradingPlansComparisonObject);
          } else {
            console.log('document not exist')
          }
       })
  }
  getCompanyBasicDetails() {
    this.service.getCompanyBasicDetails("upstox-review").subscribe((doc) => {
          if(doc.exists) {
            this.companyBasicDetailsObject = doc.data();
            this.companyName = this.companyBasicDetailsObject.company_name;
            console.log('Upstox basic details',this.companyBasicDetailsObject);
          } else {
            console.log('document not exist')
          }
       })
  }

  getEquityDeliveryAndIntradayCharges() {
    this.service.getEquityDeliveryAndIntradayCharges().subscribe((doc) => {
      if(doc.exists) {
        this.equityDeliveryAndIntradayCharges = doc.data();
        console.log('Upstox basic details',this.equityDeliveryAndIntradayCharges);
      } else {
        console.log('document not exist')
      }
   })
  }

  getEquityFandOcharges() {
    this.service.getEquityFandOcharges().subscribe((doc) => {
      if(doc.exists) {
        this.equityFandOCharges = doc.data();
        console.log('Upstox basic details',this.equityFandOCharges);
      } else {
        console.log('document not exist')
      }
   })
  }

  getMarginExposure() {
    this.service.upstoxMarginExposure().subscribe((doc) => {
      if(doc.exists) {
        this.marginExposure = doc.data();
        console.log('marginExposure',this.marginExposure);
      } else {
        console.log('document not exist')
      }
   })
  }
  submitCompareForm () {
    console.log('Compare Brokers', this.broker1, this.broker2)
  }
}
