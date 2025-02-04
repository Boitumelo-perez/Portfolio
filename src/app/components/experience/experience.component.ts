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

    isExpanded = false;

    toggleDetails(): void {
        console.log('Clicked!'); // Add this line
        this.isExpanded = !this.isExpanded;
      }
}
