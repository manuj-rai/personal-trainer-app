import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private readonly storageKey = 'darkMode';
  isDarkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Ensure we're in the browser before accessing localStorage
    if (isPlatformBrowser(this.platformId)) {
      const savedMode = localStorage.getItem(this.storageKey);
      this.isDarkMode = savedMode ? JSON.parse(savedMode) : false;
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    // Ensure we're in the browser before accessing localStorage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.isDarkMode));
    }
  }
}
