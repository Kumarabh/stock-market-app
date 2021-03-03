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
  {path: 'groww', component: GrowwComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyReviewRoutingModule { }
