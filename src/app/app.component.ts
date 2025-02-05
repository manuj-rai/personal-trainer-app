import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Import this to check if running in the browser
import * as AOS from 'aos';
import { DarkModeService } from './services/dark-mode.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, PricingComponent, FeaturesComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corrected typo in 'styleUrls'
})
export class AppComponent implements OnInit {
  title = 'trainer-website';

  constructor(
    public darkMode: DarkModeService,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check the platform
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS only on the browser
      AOS.init({
        duration: 1000,
        once: true,
        offset: 200,
      });
    }
  }
}
