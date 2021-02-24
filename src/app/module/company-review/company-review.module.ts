import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyReviewRoutingModule } from './company-review-routing.module';
import { ZerodhaReviewComponent } from './components/zerodha-review/zerodha-review.component';
import { UpstoxComponent } from './components/upstox/upstox.component';
// import { CompareBrokerComponent } from './compare-broker/compare-broker.component';
import { FormsModule } from '@angular/forms';
import { CompanyReviewService } from './company-review.service';
import { HttpClientModule } from '@angular/common/http';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { EdelweissReviewComponent } from './components/edelweiss-review/edelweiss-review.component';
import { FooterComponent } from './components/footer/footer.component';
import { FivePaisaComponent } from './components/five-paisa/five-paisa.component';
import { ProstocksComponent } from './components/prostocks/prostocks.component';
import { SharekhanComponent } from './components/sharekhan/sharekhan.component';
import { AngelBrokingComponent } from './components/angel-broking/angel-broking.component';


@NgModule({
  declarations: [ZerodhaReviewComponent, UpstoxComponent, SpecialOffersComponent, EdelweissReviewComponent, FooterComponent, FivePaisaComponent, ProstocksComponent, SharekhanComponent, AngelBrokingComponent],
  imports: [
    CommonModule,
    CompanyReviewRoutingModule,
    FormsModule,
    // CompanyReviewService
    HttpClientModule,
    
    
  ],
  providers: [CompanyReviewService]
})
export class CompanyReviewModule { }
