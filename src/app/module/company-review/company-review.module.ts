import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyReviewRoutingModule } from './company-review-routing.module';
import { ZerodhaReviewComponent } from './components/zerodha-review/zerodha-review.component';
import { UpstoxComponent } from './components/upstox/upstox.component';
// import { CompareBrokerComponent } from './compare-broker/compare-broker.component';
import { FormsModule } from '@angular/forms';
import { CompanyReviewService } from './company-review.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ZerodhaReviewComponent, UpstoxComponent],
  imports: [
    CommonModule,
    CompanyReviewRoutingModule,
    FormsModule,
    // CompanyReviewService
    HttpClientModule
  ],
  providers: [CompanyReviewService]
})
export class CompanyReviewModule { }
