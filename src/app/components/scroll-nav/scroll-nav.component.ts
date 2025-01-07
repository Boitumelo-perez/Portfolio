import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-scroll-nav',
    imports: [CommonModule],
    templateUrl: './scroll-nav.component.html',
    styleUrl: './scroll-nav.component.css'
})
export class ScrollNavComponent {

  sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'experience', name: 'Experience' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];

  currentSectionIndex = 0;

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const offsets = this.sections.map(section => {
      const element = document.getElementById(section.id);
      return element ? element.getBoundingClientRect().top : Infinity;
    });

    this.currentSectionIndex = offsets.findIndex(offset => offset > 0 && offset < window.innerHeight / 2);
  }

  getCardStyle(index: number): any {
    const zIndex = this.sections.length - Math.abs(index - this.currentSectionIndex);
    const offset = Math.min(Math.abs(index - this.currentSectionIndex) * 10, 50);
    return {
      zIndex: zIndex,
      transform: `translateY(${offset}px)`,
    };
  }
}