import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockMarketRoutingModule } from './stock-market-routing.module';
import { StockHomePageComponent } from './component/stock-home-page/stock-home-page.component';
import { StockMarketHeaderComponent } from './component/stock-market-header/stock-market-header.component';
import { FormsModule } from '@angular/forms';
import { ShortLinksStockMarketComponent } from './component/short-links-stock-market/short-links-stock-market.component';
import { SharedModule } from '../shared/shared.module';
import { StockTradingHolidaysComponent } from './component/stock-trading-holidays/stock-trading-holidays.component';
import { CommodityTradingHolidaysComponent } from './component/commodity-trading-holidays/commodity-trading-holidays.component';
import { StockMessageBoardComponent } from './component/stock-message-board/stock-message-board.component';


@NgModule({
  declarations: [StockHomePageComponent, StockMarketHeaderComponent, ShortLinksStockMarketComponent, StockTradingHolidaysComponent, CommodityTradingHolidaysComponent, StockMessageBoardComponent],
  imports: [
    CommonModule,
    StockMarketRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class StockMarketModule { }
