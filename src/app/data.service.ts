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
    {companyName: 'ICICI Direct', companyUrl: 'icici-direct', dbUrl: 'icici_direct'},
    {companyName: 'HDFC Securities', companyUrl: 'hdfc-securities',dbUrl: 'hdfc_securities' },
    {companyName: 'Sharekhan', companyUrl: 'sharekhan', dbUrl: 'sharekhan' },
    {companyName: 'AxisDirect', companyUrl: 'axis-direct', dbUrl: 'axis_direct'},
    {companyName: 'Angel Broking', companyUrl: 'angel-broking', dbUrl: 'angel_broking'},
    {companyName: 'Kotak Securities', companyUrl: 'kotak-securities', dbUrl: 'kotak_securities'},
    {companyName: 'Motilal Oswal', companyUrl: 'motilal-oswal', dbUrl: 'motilal_oswal'},
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
}






