import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeCalculatorComponent } from './home-calculator/home-calculator.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { IpoWatchComponent } from './ipo-watch/ipo-watch.component';
import { ShareBrokerReviewsComponent } from './share-broker-reviews/share-broker-reviews.component';
import { CompareBrokerComponent } from './compare-broker/compare-broker.component'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeCalculatorComponent,
    HomeComponent,
    FilterPipe,
    IpoWatchComponent,
    ShareBrokerReviewsComponent,
    CompareBrokerComponent,
    CarouselComponent,
    FooterGlobalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
