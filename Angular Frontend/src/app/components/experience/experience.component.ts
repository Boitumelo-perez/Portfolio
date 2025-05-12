import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-experience',
    imports: [ CommonModule ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {

    showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
