import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyReviewService {

  constructor(private http:HttpClient, private firestore: AngularFirestore) { }
  
  getUpstoxTradingPlansComparison() : Observable<any> {
   
   return this.firestore.collection("upstox-review").doc("upstox-trading-plans-comparison").get();

   
  }
}
