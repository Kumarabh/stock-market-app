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
}






