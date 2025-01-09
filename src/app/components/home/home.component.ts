import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
    selector: 'app-home',
    imports: [
      FontAwesomeModule,
      AboutComponent,
      ProjectsComponent,
      ExperienceComponent,
      SkillsComponent,
      ContactComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;

  onMouseMove(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  }
  // constructor(private router: Router) {}

  // isActive(route: string): boolean {
  //   return this.router.url === route;
  // }

  // scrollTo(sectionId: string): void {

  //   const section = document.getElementById(sectionId);
  //   if(section) {
  //     section.scrollIntoView({behavior: 'smooth', block: 'start' });
  //   }
  // }
  
}
