import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BseSmeSharePricesLiveComponent } from './components/bse-sme-share-prices-live/bse-sme-share-prices-live.component';
import { NseBulkDealsComponent } from './components/nse-bulk-deals/nse-bulk-deals.component';
import { NseCircuitFilterComponent } from './components/nse-circuit-filter/nse-circuit-filter.component';
import { NseSmeSharePricesLiveComponent } from './components/nse-sme-share-prices-live/nse-sme-share-prices-live.component';


const routes: Routes = [
  {path: 'nse-sme-share-prices-live', component: NseSmeSharePricesLiveComponent},
  {path: 'nse-bulk-deals', component: NseBulkDealsComponent},
  {path: 'nse-circuit-filter', component: NseCircuitFilterComponent},
  {path: 'bse-sme-share-prices-live', component: BseSmeSharePricesLiveComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NseBseRoutingModule { }
