import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommodityTradingHolidaysComponent } from './components/commodity-trading-holidays/commodity-trading-holidays.component';
import {StockHomePageComponent} from './components/stock-home-page/stock-home-page.component'
import { StockMessageBoardComponent } from './components/stock-message-board/stock-message-board.component';
import { StockTradingHolidaysComponent } from './components/stock-trading-holidays/stock-trading-holidays.component';

const routes: Routes = [
  {path: 'india-stock-market-live-indexes-and-news', component: StockHomePageComponent},
  {path: 'stock-trading-holidays', component: StockTradingHolidaysComponent},
  {path: 'commodity-trading-holidays', component: CommodityTradingHolidaysComponent},
  {path: 'stock-message-board', component: StockMessageBoardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockMarketRoutingModule { }
