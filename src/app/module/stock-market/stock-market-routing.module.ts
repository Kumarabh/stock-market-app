import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StockHomePageComponent} from './component/stock-home-page/stock-home-page.component'

const routes: Routes = [
  {path: 'india-stock-market-live-indexes-and-news', component: StockHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockMarketRoutingModule { }
