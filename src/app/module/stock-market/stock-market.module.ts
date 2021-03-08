import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockMarketRoutingModule } from './stock-market-routing.module';
import { StockHomePageComponent } from './components/stock-home-page/stock-home-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StockTradingHolidaysComponent } from './components/stock-trading-holidays/stock-trading-holidays.component';
import { CommodityTradingHolidaysComponent } from './components/commodity-trading-holidays/commodity-trading-holidays.component';
import { StockMessageBoardComponent } from './components/stock-message-board/stock-message-board.component';


@NgModule({
  declarations: [StockHomePageComponent, StockTradingHolidaysComponent, CommodityTradingHolidaysComponent, StockMessageBoardComponent],
  imports: [
    CommonModule,
    StockMarketRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class StockMarketModule { }
