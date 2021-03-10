import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NseBseRoutingModule } from './nse-bse-routing.module';
import { NseSmeSharePricesLiveComponent } from './components/nse-sme-share-prices-live/nse-sme-share-prices-live.component';
import { SharedModule } from '../shared/shared.module';
import { NseBulkDealsComponent } from './components/nse-bulk-deals/nse-bulk-deals.component';
import { NseCircuitFilterComponent } from './components/nse-circuit-filter/nse-circuit-filter.component';
import { BseSmeSharePricesLiveComponent } from './components/bse-sme-share-prices-live/bse-sme-share-prices-live.component';


@NgModule({
  declarations: [NseSmeSharePricesLiveComponent, NseBulkDealsComponent, NseCircuitFilterComponent, BseSmeSharePricesLiveComponent],
  imports: [
    CommonModule,
    NseBseRoutingModule,
    SharedModule
  ]
})
export class NseBseModule { }
