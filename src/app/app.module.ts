import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PricingCardComponent } from './pricing-card/pricing-card.component';
import { PricingTwoComponent } from './pricing-two/pricing-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingCardComponent,
    PricingTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
