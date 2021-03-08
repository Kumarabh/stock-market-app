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


@NgModule({
  declarations: [ZerodhaReviewComponent, UpstoxComponent, EdelweissReviewComponent, FooterComponent, FivePaisaComponent, ProstocksComponent, SharekhanComponent, AngelBrokingComponent, FyersComponent, HdfcSecuritiesComponent, CompanyHeaderComponent, CompanyPageScrollComponent, KotakSecuritiesComponent, IciciDirectComponent, MotilalOswalComponent, AxisDirectComponent, AnandRathiComponent, SbiSecuritiesComponent, KarvyComponent, SmcGlobalComponent, GrowwComponent, IiflSecuritiesComponent, GeojitComponent],
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
