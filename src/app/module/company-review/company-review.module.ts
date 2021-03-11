import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyReviewRoutingModule } from './company-review-routing.module';
import { ZerodhaReviewComponent } from './components/zerodha-review/zerodha-review.component';
import { UpstoxComponent } from './components/upstox/upstox.component';
// import { CompareBrokerComponent } from './compare-broker/compare-broker.component';
import { FormsModule } from '@angular/forms';
import { CompanyReviewService } from './company-review.service';
import { HttpClientModule } from '@angular/common/http';
import { EdelweissReviewComponent } from './components/edelweiss-review/edelweiss-review.component';
import { FooterComponent } from './components/footer/footer.component';
import { FivePaisaComponent } from './components/five-paisa/five-paisa.component';
import { ProstocksComponent } from './components/prostocks/prostocks.component';
import { SharekhanComponent } from './components/sharekhan/sharekhan.component';
import { AngelBrokingComponent } from './components/angel-broking/angel-broking.component';
import { FyersComponent } from './components/fyers/fyers.component';
import { HdfcSecuritiesComponent } from './components/hdfc-securities/hdfc-securities.component';
import { CompanyHeaderComponent } from './components/company-header/company-header.component';
import { CompanyPageScrollComponent } from './components/company-page-scroll/company-page-scroll.component';
import { KotakSecuritiesComponent } from './components/kotak-securities/kotak-securities.component';
import { IciciDirectComponent } from './components/icici-direct/icici-direct.component';
import { MotilalOswalComponent } from './components/motilal-oswal/motilal-oswal.component';
import { AxisDirectComponent } from './components/axis-direct/axis-direct.component';
import { AnandRathiComponent } from './components/anand-rathi/anand-rathi.component';
import { SbiSecuritiesComponent } from './components/sbi-securities/sbi-securities.component';
import { KarvyComponent } from './components/karvy/karvy.component';
import { SmcGlobalComponent } from './components/smc-global/smc-global.component';
import { GrowwComponent } from './components/groww/groww.component';
import { IiflSecuritiesComponent } from './components/iifl-securities/iifl-securities.component';
import { GeojitComponent } from './components/geojit/geojit.component';
import { SharedModule } from '../shared/shared.module';
import { StoxkartComponent } from './components/stoxkart/stoxkart.component';
import { DhaniStocksComponent } from './components/dhani-stocks/dhani-stocks.component';
import { ReligareComponent } from './components/religare/religare.component';
import { VenturaComponent } from './components/ventura/ventura.component';
import { MasterTrustComponent } from './components/master-trust/master-trust.component';
import { IndiaBullsComponent } from './components/india-bulls/india-bulls.component';
import { AdityaBirlaMoneyComponent } from './components/aditya-birla-money/aditya-birla-money.component';
import { BonanzaComponent } from './components/bonanza/bonanza.component';
import { SamcoComponent } from './components/samco/samco.component';
import { TradingBellsComponent } from './components/trading-bells/trading-bells.component';
import { IdbiCapitalsComponent } from './components/idbi-capitals/idbi-capitals.component';
import { TradeSmartComponent } from './components/trade-smart/trade-smart.component';
import { SasOnlineComponent } from './components/sas-online/sas-online.component';
import { ItradeOnlineComponent } from './components/itrade-online/itrade-online.component';
import { RkGlobalComponent } from './components/rk-global/rk-global.component';
import { TradePlusComponent } from './components/trade-plus/trade-plus.component';
import { TradeJiniComponent } from './components/trade-jini/trade-jini.component';
import { AliceBlueComponent } from './components/alice-blue/alice-blue.component';
import { WisdomCapitalComponent } from './components/wisdom-capital/wisdom-capital.component';
import { FinvasiaComponent } from './components/finvasia/finvasia.component';
import { RmoneyComponent } from './components/rmoney/rmoney.component';
import { BeelineComponent } from './components/beeline/beeline.component';
import { JustTradeComponent } from './components/just-trade/just-trade.component';
import { AchiiversComponent } from './components/achiivers/achiivers.component';
import { TrustLineComponent } from './components/trust-line/trust-line.component';
import { YesSecuritiesComponent } from './components/yes-securities/yes-securities.component';
import { IndiraSecuritiesComponent } from './components/indira-securities/indira-securities.component';
import { PaytmMoneyComponent } from './components/paytm-money/paytm-money.component';
import { ChoiceBrokingComponent } from './components/choice-broking/choice-broking.component';
import { GclSecuritiesComponent } from './components/gcl-securities/gcl-securities.component';
import { CompanyReviewComponent } from './components/company-review/company-review.component';


@NgModule({
  declarations: [ZerodhaReviewComponent, UpstoxComponent, EdelweissReviewComponent, FooterComponent, FivePaisaComponent, ProstocksComponent, SharekhanComponent, AngelBrokingComponent, FyersComponent, HdfcSecuritiesComponent, CompanyHeaderComponent, CompanyPageScrollComponent, KotakSecuritiesComponent, IciciDirectComponent, MotilalOswalComponent, AxisDirectComponent, AnandRathiComponent, SbiSecuritiesComponent, KarvyComponent, SmcGlobalComponent, GrowwComponent, IiflSecuritiesComponent, GeojitComponent, StoxkartComponent, DhaniStocksComponent, ReligareComponent, VenturaComponent, MasterTrustComponent, IndiaBullsComponent, AdityaBirlaMoneyComponent, BonanzaComponent, SamcoComponent, TradingBellsComponent, IdbiCapitalsComponent, TradeSmartComponent, SasOnlineComponent, ItradeOnlineComponent, RkGlobalComponent, TradePlusComponent, TradeJiniComponent, AliceBlueComponent, WisdomCapitalComponent, FinvasiaComponent, RmoneyComponent, BeelineComponent, JustTradeComponent, AchiiversComponent, TrustLineComponent, YesSecuritiesComponent, IndiraSecuritiesComponent, PaytmMoneyComponent, ChoiceBrokingComponent, GclSecuritiesComponent, CompanyReviewComponent],
  imports: [
    CommonModule,
    CompanyReviewRoutingModule,
    FormsModule,
    // CompanyReviewService
    HttpClientModule,
    SharedModule
    
  ],
  providers: [CompanyReviewService]
})
export class CompanyReviewModule { }
