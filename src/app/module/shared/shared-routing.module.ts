import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompareBrokerViewComponent} from './components/compare-broker-view/compare-broker-view.component'

const routes: Routes = [
  {path: '', component: CompareBrokerViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
