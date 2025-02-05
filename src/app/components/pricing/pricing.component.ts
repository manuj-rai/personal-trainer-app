import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent implements OnInit {

  plans = [
    {
      name: 'Basic Plan',
      price: 19.99,
      features: [
        '1 User Access',
        'Basic Support',
        '1GB Storage',
        'Basic Analytics'
      ]
    },
    {
      name: 'Pro Plan',
      price: 39.99,
      features: [
        '5 User Access',
        'Priority Support',
        '5GB Storage',
        'Advanced Analytics'
      ]
    },
    {
      name: 'Premium Plan',
      price: 59.99,
      features: [
        'Unlimited Users',
        '24/7 Support',
        'Unlimited Storage',
        'Premium Analytics'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // You can perform any initialization logic here
  }

  // Method to handle plan selection
  selectPlan(plan: any): void {
    // You can do something with the selected plan, like navigate to checkout or show a confirmation message
    console.log('Selected Plan:', plan);
    // Example action: Alerting the plan name and price
    alert(`You selected the ${plan.name} for $${plan.price}/month.`);
  }

}
