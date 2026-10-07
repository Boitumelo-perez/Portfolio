import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { MessagesComponent } from '../messages/messages.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-home',
    imports: [
      FontAwesomeModule,
      AboutComponent,
      ProjectsComponent,
      ExperienceComponent,
      SkillsComponent,
      ContactComponent,
      MessagesComponent,
      CommonModule,
      RouterLink
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faLock = faLock;

  scrolled = false;
  showResumeModal = false;
console: any;

  onMouseMove(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  }

  constructor(private router: Router) {}

  openMessage() {
    this.router.navigate(['/messages']);
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
  }

  openResumeModal() {
    this.showResumeModal = true;
  }

  closeResumeModal() {
    this.showResumeModal = false;
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // In your component class (home.component.ts)
logClick() {
  console.log('Button clicked');
}
  
}
