import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpstoxComponent } from './components/upstox/upstox.component';
import { ZerodhaReviewComponent } from './components/zerodha-review/zerodha-review.component';
import { EdelweissReviewComponent } from './components/edelweiss-review/edelweiss-review.component';
import { FivePaisaComponent } from './components/five-paisa/five-paisa.component';
import { ProstocksComponent } from './components/prostocks/prostocks.component';
import { SharekhanComponent } from './components/sharekhan/sharekhan.component';
import { AngelBrokingComponent } from './components/angel-broking/angel-broking.component';
import {HdfcSecuritiesComponent} from './components/hdfc-securities/hdfc-securities.component'
import { FyersComponent } from './components/fyers/fyers.component';
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

const routes: Routes = [
  {path: '', component: ZerodhaReviewComponent},
  {path: 'zerodha', component: ZerodhaReviewComponent},
  {path: 'upstox', component: UpstoxComponent},
  {path: 'edelweiss', component: EdelweissReviewComponent},
  {path: 'five-paisa', component: FivePaisaComponent},
  {path: 'prostocks', component: ProstocksComponent},
  {path: 'sharekhan', component: SharekhanComponent},
  {path: 'angel-broking', component: AngelBrokingComponent},
  {path: 'hdfc-securities', component: HdfcSecuritiesComponent},
  {path: 'fyers', component: FyersComponent},
  {path: 'kotak-securities', component: KotakSecuritiesComponent},
  {path: 'icici-direct', component: IciciDirectComponent},
  {path: 'motilal-oswal', component: MotilalOswalComponent},
  {path: 'axis-direct', component: AxisDirectComponent},
  {path: 'anand-rathi', component: AnandRathiComponent},
  {path: 'sbi-securities', component: SbiSecuritiesComponent},
  {path: 'karvy', component: KarvyComponent},
  {path:'smc-global', component: SmcGlobalComponent},
  {path: 'groww', component: GrowwComponent},
  {path: 'iifl-securities', component: IiflSecuritiesComponent},
  {path: 'geojit-bnp-paribas', component: GeojitComponent},
  {path: 'stoxkart', component: StoxkartComponent},
  {path: 'dhani-stocks', component: DhaniStocksComponent},
  {path: 'religare', component: ReligareComponent},
  {path: 'ventura', component: VenturaComponent},
  {path: 'master-trust', component: MasterTrustComponent},
  {path: 'india-bulls', component: IndiaBullsComponent},
  {path: 'aditya-birla-money', component: AdityaBirlaMoneyComponent},
  {path: 'bonanza', component: BonanzaComponent},
  {path: 'samco', component: SamcoComponent},
  {path: 'trading-bells', component: TradingBellsComponent},
  {path: 'idbi-capital', component: IdbiCapitalsComponent},
  {path: 'trade-smart', component: TradeSmartComponent},
  {path: 'sas-online', component: SasOnlineComponent},
  {path: 'itrade-online', component: ItradeOnlineComponent},
  {path: 'rk-global', component: RkGlobalComponent},
  {path: 'trade-plus', component: TradePlusComponent},
  {path: 'trade-jini', component: TradeJiniComponent},
  {path: 'alice-blue', component: AliceBlueComponent},
  {path: 'wisdom-capital', component: WisdomCapitalComponent},
  {path: 'finvasia', component: FinvasiaComponent},
  {path: 'rmoney', component: RmoneyComponent},
  {path: 'beeline', component: BeelineComponent},
  {path: 'just-trade', component: JustTradeComponent},
  {path: 'achiievers', component: AchiiversComponent},
  {path: 'trustline', component: TrustLineComponent},
  {path: 'yes-securities', component: YesSecuritiesComponent},
  {path: 'indira-securities', component: IndiraSecuritiesComponent},
  {path: 'paytm-money', component: PaytmMoneyComponent},
  {path: 'choice-broking', component: ChoiceBrokingComponent},
  {path: 'gcl-securities', component: GclSecuritiesComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyReviewRoutingModule { }
