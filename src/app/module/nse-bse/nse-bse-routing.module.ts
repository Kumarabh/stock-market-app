import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NseSmeSharePricesComponent } from './components/nse-sme-share-prices/nse-sme-share-prices.component';


const routes: Routes = [
  {path: 'nse-sme-share-prices', component: NseSmeSharePricesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NseBseRoutingModule { }
