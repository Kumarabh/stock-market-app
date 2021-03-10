import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  baseUrl = 'http://localhost:9090/api/tutorials';
  allBrokersUrl = '../../assets/allBrokers.json';
  allBrokers
  items: Observable<any[]>;
  constructor(private http:HttpClient, private firestore: AngularFirestore) {

   }

  ngOnInit() {
   
  }
  
  getCompanyData(company_name): Observable<any> {
    console.log('company name', company_name);
    
    return this.firestore.collection('compare_brokers').doc(company_name).get();

  }

  getUtilitiesData(docId) : Observable<any>{
    return this.firestore.collection("utilities").doc(docId).get();

  }
  getSpecialOffers(): Observable<any> {
    return this.firestore.collection('special_offers').doc("special_offers").get();
  }
  pageData(pageName): Observable<any> {
    
    return this.firestore.collection(pageName).doc('page_data').get();
  }

  getUpcomingIPO() : Observable<any> {
    
    return this.firestore.collection('upcoming-dropdowns').doc('upcoming-ipo').get();
  }
  getUpcomingNCD() : Observable<any> {
    return this.firestore.collection('upcoming-dropdowns').doc('upcoming-ncd').get();
  }
  getUpcomingRightsIssue() : Observable<any> {
    return this.firestore.collection('upcoming-dropdowns').doc('upcoming-rights-issue').get();
  }
  getUpcomingSMEipo() : Observable<any> {
    return this.firestore.collection('upcoming-dropdowns').doc('upcoming-sme-ipo').get();
  }

  setCompareBrokerData (doc, dataObject) {
    return this.firestore.collection('compare_brokers').doc(doc)
    .set(dataObject).then( () => {
      console.log('Success fully posted');
      
    }).catch ((error) => {
      console.log('error posting');
      
    })
  }

  setCompany () {
    return this.firestore.collection('companies').doc('zerodha')
    .set(this.companyData).then( () => {
      console.log('Success fully posted');
      
    }).catch ((error) => {
      console.log('error posting');
      
    })
  }
  getTradersData() : Observable<any> {
    return this.firestore.collection('employee').get();
  }
 

  getAllBrokers(){
    return this.http.get(this.allBrokersUrl);
  }

  getAll() {
    return this.http.get(this.baseUrl);
  }

  get(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(this.baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title) {
    return this.http.get(`${this.baseUrl}?title=${title}`);
  }
  companyData = 
  {
      "brokerName": "",
      "typeOfBroker":"",
      "supportedExchanges": "",
      "accountType":"",
      "yearOfIncorporation": "",
      "numberOfBranches": "",
      "brokerEnquiry": "",
      "tradingAccountOpeningCharges": "",
      "tradingAccountAmcCharges":"",
      "dematAccountOpeningCharges": "",
      "dematAccountAmcCharges": "",
      "fixedCharges": "",
      "equityDeliveryBrokerage": "",
      "equityIntradayBrokerage": "",
      "equityFuturesBrokerage": "",
      "equityOptionsBrokerage": "",
      "currencyFuturesTradingBrokerage": "",
      "currencyOptionsTradingBrokerage": "",
      "commodityFuturesTradingBrokerage": "",
      "commodityOptionsTradingBrokerage": "",
      "specialOffers": "",
      "minimumBrokerageCharges": "",
      "otherBrokerageCharges": "",
      "callAndTradeCharges": "",
      "equityDelivery": "",
      "equityIntraday": "",
      "equityFutures": "",
      "equityOptions": "",
      "currencyFutures": "",
      "currencyOptions": "",
      "commodity": "",
      "commodityFutures": "",
      "commodityOptions": "",
      "3_in_1_Account": "",
      "charting": "",
      "automatedTrading": "",
      "smsAlerts": "",
      "onlineDemo": "",
      "onlinePortfolio": "",
      "marginTradingFundingAvailable": "",
      "marginAgainstShares_equity_cash": "",
      "marginAgainstShares_equity_f_and_o": "",
      "tradingPlatform": "",
      "intradaySquareOffTime": "",
      "otherFeatures": "",
      "referralProgram": "",
      "fees": "",
      "tradingBrokerage": "",
      "tradingPlatformUsability": "",
      "customerService": "",
      "researchCapabilities": "",
      "overallRatings": "",
      "brokerRating": "",
      "has": {
          "stockOrEquity": "",
          "commodity": "",
          "currency": "",
          "initialPublicOffers": "",
          "mutualFunds": "",
          "bondOrNcd": "",
          "dept": "",
          "otherInvestmentOptions": "",
          "bracketOrder": "",
          "coverOrder": "",
          "buyTodaySellTomorrow": "",
          "sellTodayBuyTomorrow": "",
          "afterMarketOrder": "",
          "goodTillCancelled": "",
          "dailyMarketReport": "",
          "freeTips": "",
          "quaterlyResultAnalysis": "",
          "newsAlerts": "",
          "casualInvestor": "",
          "activeInvestor": "",
          "trader": "",
          "pros": [
  
          ],
          "cons": [
  
          ],
          "reviews": "",
          "promoOrOffers": ""
  
      }
      
  
  
  
      
  }

  allCompanies = [
    {companyName: 'ICICI Direct', companyUrl: 'icici-direct', dbUrl: 'icici_direct',status: 'active'},
    {companyName: 'HDFC Securities', companyUrl: 'hdfc-securities',dbUrl: 'hdfc_securities',status: 'active' },
    {companyName: 'Sharekhan', companyUrl: 'sharekhan', dbUrl: 'sharekhan',status: 'active' },
    {companyName: 'AxisDirect', companyUrl: 'axis-direct', dbUrl: 'axis_direct',status: 'active'},
    {companyName: 'Angel Broking', companyUrl: 'angel-broking', dbUrl: 'angel_broking',status: 'active'},
    {companyName: 'Kotak Securities', companyUrl: 'kotak-securities', dbUrl: 'kotak_securities',status: 'active'},
    {companyName: 'Motilal Oswal', companyUrl: 'motilal-oswal', dbUrl: 'motilal_oswal',status: 'active'},
    {companyName: 'Karvy', companyUrl: 'karvy' , dbUrl: 'karvy',status: 'active'},
    {companyName: 'Stoxkart', companyUrl: 'stoxkart', dbUrl: 'stoxkart',status: 'active'},
    {companyName: 'Groww', companyUrl: 'groww', dbUrl: 'groww',status: 'active'},
    {companyName: 'Dhani Stocks', companyUrl: 'dhani-stocks', dbUrl: 'dhani_stocks',status: 'active'},
    {companyName: 'IIFL Securities', companyUrl: 'iifl-securities', dbUrl: 'iifl_securities',status: 'active'},
    {companyName: 'SBI Securities', companyUrl: 'sbi-securities', dbUrl: 'sbi_securities',status: 'active'},
    {companyName: 'Geojit', companyUrl: 'geojit', dbUrl: 'geojit',status: 'active'},
    {companyName: 'Religare', companyUrl: 'religare', dbUrl: 'religare',status: 'active'},
    {companyName: 'Edelweiss', companyUrl: 'edelweiss', dbUrl: 'edelweiss',status: 'active'},
    {companyName: 'SMC Global', companyUrl: 'smc-global', dbUrl: 'smc_global',status: 'active'},
    {companyName: 'Nirmal Bang', companyUrl: 'nirmal-bang', dbUrl: 'motilal_oswal',status: 'active'},
    {companyName: '5paisa', companyUrl: 'five-paisa', dbUrl: 'five_paisa',status: 'active'},
    {companyName: 'Ventura', companyUrl: 'ventura', dbUrl: 'ventura',status: 'active'},

    {companyName: 'Zerodha', companyUrl: 'zerodha', dbUrl: 'zerodha',status: 'active'},
    {companyName: 'Anand Rathi', companyUrl: 'anand-rathi', dbUrl: 'anand_rathi',status: 'active'},
    {companyName: 'Master Trust', companyUrl: 'master-trust', dbUrl: 'master_trust',status: 'active'},
    {companyName: 'Indiabulls', companyUrl: 'india-bulls', dbUrl: 'india_bulls',status: 'active'},
    {companyName: 'Aditya Birla Money', companyUrl: 'aditya-birla-money', dbUrl: 'aditya_birla_money',status: 'active'},
    {companyName: 'Bonanza', companyUrl: 'bonanza', dbUrl: 'bonanza',status: 'active'},
    {companyName: 'SAMCO', companyUrl: 'samco', dbUrl: 'samco',status: 'active'},
    {companyName: 'TradingBells', companyUrl: 'trading-bells', dbUrl: 'trading_bells',status: 'active'},
    {companyName: 'IDBI Capital', companyUrl: 'idbi-capital', dbUrl: 'idbi_capital',status: 'active'},
    {companyName: 'TradeSmart', companyUrl: 'trade-smart', dbUrl: 'trade_smart',status: 'active'},
    {companyName: 'SAS Online', companyUrl: 'sas-online', dbUrl: 'sas_online',status: 'active'},
    {companyName: 'iTradeOnline', companyUrl: 'itrade-online', dbUrl: 'itrade_online',status: 'active'},
    {companyName: 'RK Global', companyUrl: 'rk-global', dbUrl: 'rk_global',status: 'active'},
    {companyName: 'Tradeplus', companyUrl: 'trade-plus', dbUrl: 'trade_plus',status: 'active'},
    {companyName: 'Tradejini', companyUrl: 'trade-jini', dbUrl: 'trade_jini',status: 'active'},
    {companyName: 'Alice Blue', companyUrl: 'alice-blue', dbUrl: 'alice_blue',status: 'inactive'},
    {companyName: 'Wisdom Capital', companyUrl: 'wisdom-capital', dbUrl: 'wisdom_capital',status: 'inactive'},
    {companyName: 'Fyers', companyUrl: 'fyers', dbUrl: 'fyers',status: 'active'},
    {companyName: 'Finvasia', companyUrl: 'finvasia', dbUrl: 'finvasia',status: 'inactive'},
    {companyName: 'Prostocks', companyUrl: 'prostocks', dbUrl: 'prostocks',status: 'active'},

    {companyName: 'RMoney', companyUrl: 'rmoney', dbUrl: 'rmoney',status: 'active'},
    {companyName: 'Beeline', companyUrl: 'beeline', dbUrl: 'beeline',status: 'active'},
    {companyName: 'Just Trade', companyUrl: 'just-trade', dbUrl: 'just_trade',status: 'active'},
    {companyName: 'Achiievers', companyUrl: 'achiievers', dbUrl: 'achiievers',status: 'inactive'},
    {companyName: 'Trustline', companyUrl: 'trustline', dbUrl: 'trustline',status: 'inactive'},
    {companyName: 'Yes Securities', companyUrl: 'yes-securities', dbUrl: 'yes_securities',status: 'inactive'},
    {companyName: 'Indira Securities', companyUrl: 'indira-securities', dbUrl: 'indira_securities',status: 'inactive'},
    {companyName: 'Paytm Money', companyUrl: 'paytm-money', dbUrl: 'paytm_money',status: 'inactive'},
    {companyName: 'Choice Broking', companyUrl: 'choice-broking', dbUrl: 'choice_broking',status: 'inactive'},
    {companyName: 'GCL Securities', companyUrl: 'gcl-securities', dbUrl: 'gcl_securities',status: 'inactive'},

  ]
}






