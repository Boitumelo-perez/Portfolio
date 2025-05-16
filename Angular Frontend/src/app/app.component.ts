import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollNavComponent } from './components/scroll-nav/scroll-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ScrollNavComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sinwamadi-BPs-portfolio';
}
