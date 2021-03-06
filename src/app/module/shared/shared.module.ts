import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CompareBrokerComponent } from './components/compare-broker/compare-broker.component';
import { FormsModule } from '@angular/forms';
import { MoreDiscountBrokersComponent } from './components/more-discount-brokers/more-discount-brokers.component';
import { MoreServiceBrokersComponent } from './components/more-service-brokers/more-service-brokers.component';


@NgModule({
  declarations: [CompareBrokerComponent, MoreDiscountBrokersComponent, MoreServiceBrokersComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [CompareBrokerComponent, MoreDiscountBrokersComponent, MoreServiceBrokersComponent]
})
export class SharedModule { }
