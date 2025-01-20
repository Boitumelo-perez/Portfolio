import { Component } from '@angular/core';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {

    isExpanded = false;

    toggleDetails() {
        this.isExpanded = !this.isExpanded; // Toggle expanded state
      }
}
