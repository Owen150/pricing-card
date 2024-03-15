import { Component } from '@angular/core';

//Defining the structure of the pricing data objects
//By defining an interface, we establish a contract that specifies what properties and their types a pricing data object should have.
interface Pricing {
  title: string;
  prices: {
    monthly: string;
    yearly: string;
  };
  cycles?: {
    monthly: string;
    yearly: string;
  };
  features: string[];
  featureButton: string;
}

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css'],
})
export class PricingCardComponent {
  title = 'price_cards';
  isToggled: boolean = false;

  // Array of pricing data
  pricingData: Pricing[] = [
    {
      title: 'Starter',
      prices: { monthly: '$19', yearly: '$679' },
      features: [
        '500 MAUs',
        'Unlimited guides',
        'Unlimited flows',
        'Unlimited branded themes',
        'Email support',
      ],
      featureButton: 'Choose Plan',
    },
    {
      title: 'Pro',
      prices: { monthly: '$99', yearly: '$988' },
      cycles: { monthly: '/month', yearly: '/year' },
      features: [
        'All starter features, plus:',
        'Unlimited projects',
        'Unlimited fully customizable themes',
        'A dedicated customer success manager',
      ],
      featureButton: 'Choose Plan',
    },
    {
      title: 'Enterprise',
      prices: { monthly: "Let's Talk", yearly: "Let's Talk" },
      features: [
        'All Pro features',
        'Unlimited MAUs',
        'Dedicated Environment',
        'Enterprise account administration',
        'Premium support services',
      ],
      featureButton: 'Contact Us',
    },
  ];

  toggleBoxChange(event: any) {
    console.log(event);
    this.isToggled = event;
  }
}
