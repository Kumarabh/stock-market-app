import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-broker',
  templateUrl: './compare-broker.component.html',
  styleUrls: ['./compare-broker.component.css']
})
export class CompareBrokerComponent implements OnInit {
  broker1
  broker2

  allCompanies = [
    {companyName: 'ICICI Direct', companyUrl: 'icici-direct'},
    {companyName: 'HDFC Securities', companyUrl: 'hdfc-securities'},
    {companyName: 'Sharekhan', companyUrl: 'sharekhan'},
    {companyName: 'AxisDirect', companyUrl: 'axis-direct'},
    {companyName: 'Angel Broking', companyUrl: 'angel-broking'},
    {companyName: 'Kotak Securities', companyUrl: 'kotak-securities'},
    {companyName: 'Motilal Oswal', companyUrl: 'motilal-oswal'},
    {companyName: 'Karvy', companyUrl: 'karvy'},
    {companyName: 'Stoxkart', companyUrl: 'stoxkart'},
    {companyName: 'Groww', companyUrl: 'groww'},
    {companyName: 'Dhani Stocks', companyUrl: 'dhani-stocks'},
    {companyName: 'IIFL Securities', companyUrl: 'iifl-securities'},
    {companyName: 'SBI Securities', companyUrl: 'sbi-securities'},
    {companyName: 'Geojit', companyUrl: 'geojit'},
    {companyName: 'Religare', companyUrl: 'religare'},
    {companyName: 'Edelweiss', companyUrl: 'edelweiss'},
    {companyName: 'SMC Global', companyUrl: 'smc-global'},
    {companyName: 'Nirmal Bang', companyUrl: 'nirmal-bang'},
    {companyName: '5paisa', companyUrl: 'five-paisa'},
    {companyName: 'Ventura', companyUrl: 'ventura'},

    {companyName: 'Zerodha', companyUrl: 'zerodha'},
    {companyName: 'Anand Rathi', companyUrl: 'anand-rathi'},
    {companyName: 'Master Trust', companyUrl: 'master-trust'},
    {companyName: 'Indiabulls', companyUrl: 'india-bulls'},
    {companyName: 'Aditya Birla Money', companyUrl: 'aditya-birla-money'},
    {companyName: 'Bonanza', companyUrl: 'bonanza'},
    {companyName: 'SAMCO', companyUrl: 'samco'},
    {companyName: 'TradingBells', companyUrl: 'tradingbells'},
    {companyName: 'IDBI Capital', companyUrl: 'idbi-capital'},
    {companyName: 'TradeSmart', companyUrl: 'trade-smart'},
    {companyName: 'SAS Online', companyUrl: 'sas-online'},
    {companyName: 'iTradeOnline', companyUrl: 'itrade-online'},
    {companyName: 'RK Global', companyUrl: 'rk-global'},
    {companyName: 'Tradeplus', companyUrl: 'tradeplus'},
    {companyName: 'Tradejini', companyUrl: 'trade-jini'},
    {companyName: 'Alice Blue', companyUrl: 'alice-blue'},
    {companyName: 'Wisdom Capital', companyUrl: 'wisdom-capital'},
    {companyName: 'Fyers', companyUrl: 'fyers'},
    {companyName: 'Finvasia', companyUrl: 'finvasia'},
    {companyName: 'Prostocks', companyUrl: 'prostocks'},

    {companyName: 'RMoney', companyUrl: 'rmoney'},
    {companyName: 'Beeline', companyUrl: 'beeline'},
    {companyName: 'Just Trade', companyUrl: 'just-trade'},
    {companyName: 'Achiievers', companyUrl: 'achiievers'},
    {companyName: 'Trustline', companyUrl: 'trustline'},
    {companyName: 'Yes Securities', companyUrl: 'yes-securities'},
    {companyName: 'Indira Securities', companyUrl: 'indira-securities'},
    {companyName: 'Paytm Money', companyUrl: 'paytm-money'},
    {companyName: 'Choice Broking', companyUrl: 'choice-broking'},
    {companyName: 'GCL Securities', companyUrl: 'gcl-securities'},

  ]
  constructor() { }

  ngOnInit() {
    console.log('companies', this.allCompanies);
    
  }
  submitCompareForm() {

  }

}
