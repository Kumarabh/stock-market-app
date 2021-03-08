import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable, ObservableLike} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyReviewService {
  

  constructor(private http:HttpClient, private firestore: AngularFirestore) { }
  

  getUpstoxTradingPlansComparison() : Observable<any> {
   return this.firestore.collection("upstox-review").doc("upstox-trading-plans-comparison").get();
   
  }

  getEquityDeliveryAndIntradayCharges() : Observable<any> {
    return this.firestore.collection("upstox-review").doc("equity_delivery_intraday_charges").get();
  }

  getEquityFandOcharges() : Observable<any> {
    return this.firestore.collection("upstox-review").doc("equity_f_o_charges").get();
  }

  getCompanyBasicDetails(collection): Observable<any> {
    return this.firestore.collection(collection).doc("basic_details").get();
   }

  

  upstoxCurrencyCharges(): Observable<any> {
    return this.firestore.collection('upstox-review').doc("currency_charges_table").get();
  }

  upstoxCommodityCharges(): Observable<any> {
    return this.firestore.collection('upstox-review').doc("commodity_charges_table").get();
  }
  upstoxMarginExposure(): Observable<any> {
    return this.firestore.collection('upstox-review').doc("margin-exposure").get();
  }

  brokerList(): Observable<any> {
    return this.firestore.collection('broker_list').doc("broker_list").get();
  }
  
  getCompanyData(company_name): Observable<any> {
    return this.firestore.collection('company_review').doc(company_name).get();

  }
}
