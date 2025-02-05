import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  features = [
    {
      title: 'Personalized Training',
      description: 'Tailored workout plans designed for your goals and progress.',
      icon: 'dumbbell'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with real-time data and charts.',
      icon: 'chart'
    },
    {
      title: 'Health Focused',
      description: 'Commit to a healthy lifestyle with balanced nutrition and wellness.',
      icon: 'heart'
    }
  ];

}
