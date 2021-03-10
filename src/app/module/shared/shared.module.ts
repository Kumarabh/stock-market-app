import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CompareBrokerComponent } from './components/compare-broker/compare-broker.component';
import { FormsModule } from '@angular/forms';
import { MoreDiscountBrokersComponent } from './components/more-discount-brokers/more-discount-brokers.component';
import { MoreServiceBrokersComponent } from './components/more-service-brokers/more-service-brokers.component';
import { TopTenStockBrokersComponent } from './components/top-ten-stock-brokers/top-ten-stock-brokers.component';
import { TradingHolidaysTwentyOneComponent } from './components/trading-holidays-twenty-one/trading-holidays-twenty-one.component';
import { CheapestCommodityBrokersComponent } from './components/cheapest-commodity-brokers/cheapest-commodity-brokers.component';
import { TopCommodityBrokersComponent } from './components/top-commodity-brokers/top-commodity-brokers.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { ShortLinksComponent } from './components/short-links/short-links.component';
import { StockHeaderComponent } from './components/stock-header/stock-header.component';
import { CompareBrokerViewComponent } from './components/compare-broker-view/compare-broker-view.component';


@NgModule({
  declarations: [CompareBrokerComponent, MoreDiscountBrokersComponent, MoreServiceBrokersComponent, TopTenStockBrokersComponent, TradingHolidaysTwentyOneComponent, CheapestCommodityBrokersComponent, TopCommodityBrokersComponent, SpecialOffersComponent, ShortLinksComponent, StockHeaderComponent, CompareBrokerViewComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [CompareBrokerComponent, MoreDiscountBrokersComponent, MoreServiceBrokersComponent, TopTenStockBrokersComponent, TradingHolidaysTwentyOneComponent,CheapestCommodityBrokersComponent, TopCommodityBrokersComponent, SpecialOffersComponent, ShortLinksComponent, StockHeaderComponent,CompareBrokerViewComponent]
})
export class SharedModule { }
