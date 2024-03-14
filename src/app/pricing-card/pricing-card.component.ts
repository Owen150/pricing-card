import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css']
})
export class PricingCardComponent {
  title = 'price_cards';
  isToggled: boolean = false;

  toggleBoxChange(event: any) {
    this.isToggled = event;
  }
}
