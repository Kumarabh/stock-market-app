import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'calculator', loadChildren: () => import('./module/calculator/calculator.module').then(m => m.CalculatorModule)},
  {path: 'review', loadChildren: () => import('./module/company-review/company-review.module').then(m=> m.CompanyReviewModule)},
  {path: 'brokerage', loadChildren: () => import('./module/brokerage/brokerage.module').then(m=> m.BrokerageModule)},
  {path: 'article', loadChildren: () => import('./module/stock-market/stock-market.module').then(m=> m.StockMarketModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
