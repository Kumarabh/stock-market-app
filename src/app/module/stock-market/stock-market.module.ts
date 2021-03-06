import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockMarketRoutingModule } from './stock-market-routing.module';
import { StockHomePageComponent } from './component/stock-home-page/stock-home-page.component';
import { StockMarketHeaderComponent } from './component/stock-market-header/stock-market-header.component';
import { CompareBrokerStockMarketComponent } from './component/compare-broker-stock-market/compare-broker-stock-market.component';
import { FormsModule } from '@angular/forms';
import { ShortLinksStockMarketComponent } from './component/short-links-stock-market/short-links-stock-market.component';


@NgModule({
  declarations: [StockHomePageComponent, StockMarketHeaderComponent,CompareBrokerStockMarketComponent, ShortLinksStockMarketComponent],
  imports: [
    CommonModule,
    StockMarketRoutingModule,
    FormsModule
  ]
})
export class StockMarketModule { }
