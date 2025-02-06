import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, FormsModule ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent implements OnInit {

  billingCycle: string = 'monthly'; // Default to monthly

  plans = [
    {
      name: 'Basic Plan',
      monthlyPrice: 1699,
      sixMonthsPrice: 8999,
      yearlyPrice: 15999,
      features: [
        '1 User Access',
        'Basic Support',
        '1GB Storage',
        'Basic Analytics',
        'Personal Trainer (Limited Sessions)'
      ]
    },
    {
      name: 'Pro Plan',
      monthlyPrice: 3399,
      sixMonthsPrice: 17999,
      yearlyPrice: 31999,
      features: [
        '5 User Access',
        'Priority Support',
        '5GB Storage',
        'Advanced Analytics',
        'Personal Trainer (Standard Sessions)'
      ]
    },
    {
      name: 'Premium Plan',
      monthlyPrice: 5099,
      sixMonthsPrice: 26999,
      yearlyPrice: 47999,
      features: [
        'Unlimited Users',
        '24/7 Support',
        'Unlimited Storage',
        'Premium Analytics',
        'Personal Trainer (Unlimited Sessions)'
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

  getPlanPrice(plan: any): number {
    const key = `${this.billingCycle}Price` as keyof typeof plan;
    return plan[key];
  }
  
}
