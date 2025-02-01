import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

interface Section {
  selector: string;
  label: string;
}

@Component({
    selector: 'app-scroll-nav',
    imports: [CommonModule],
    templateUrl: './scroll-nav.component.html',
    styleUrl: './scroll-nav.component.css'
})
export class ScrollNavComponent {

  isOpen = false;
  currentSection = 'home';
  isHomeRoute = false;

  sections: Section[] = [
    { selector: '.b', label: 'Home' },
    { selector: 'app-about', label: 'About' },
    { selector: 'app-projects', label: 'Projects' },
    { selector: 'app-experience', label: 'Experience' },
    { selector: 'app-skills', label: 'Skills' },
    { selector: 'app-contact', label: 'Contact' }
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomeRoute = this.router.url === '/' || this.router.url === '/home';
      if (this.isHomeRoute) {
        setTimeout(() => this.updateCurrentSection(), 100);
      }
    });
  }

  ngOnInit() {
    this.isHomeRoute = this.router.url === '/' || this.router.url === '/home';
    if (this.isHomeRoute) {
      setTimeout(() => this.updateCurrentSection(), 100);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isHomeRoute) {
      this.updateCurrentSection();
    }
  }

  updateCurrentSection() {
    const scrollPosition = window.scrollY + 100;

    for (const section of this.sections) {
      const element = document.querySelector(section.selector) as HTMLElement;
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.currentSection = section.label;
        }
      }
    }
  }

  navigateToSection(selector: string) {
    if (this.router.url !== '/' && this.router.url !== '/home') {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => {
          this.scrollToSection(selector);
        }, 100);
      });
    } else {
      this.scrollToSection(selector);
    }
    this.isOpen = false;
  }

  private scrollToSection(selector: string) {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy() {
    // Clean up any subscriptions if needed
  }
}