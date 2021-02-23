import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpstoxComponent } from './components/upstox/upstox.component';
import { ZerodhaReviewComponent } from './components/zerodha-review/zerodha-review.component';
import { EdelweissReviewComponent } from './components/edelweiss-review/edelweiss-review.component';
import { FivePaisaComponent } from './components/five-paisa/five-paisa.component';
import { ProstocksComponent } from './components/prostocks/prostocks.component';


const routes: Routes = [
  {path: '', component: ZerodhaReviewComponent},
  {path: 'zerodha', component: ZerodhaReviewComponent},
  {path: 'upstox', component: UpstoxComponent},
  {path: 'edelweiss', component: EdelweissReviewComponent},
  {path: 'five-paisa', component: FivePaisaComponent},
  {path: 'prostocks', component: ProstocksComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyReviewRoutingModule { }
