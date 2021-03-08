import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NseBseRoutingModule } from './nse-bse-routing.module';
import { NseSmeSharePricesComponent } from './components/nse-sme-share-prices/nse-sme-share-prices.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NseSmeSharePricesComponent],
  imports: [
    CommonModule,
    NseBseRoutingModule,
    SharedModule
  ]
})
export class NseBseModule { }
