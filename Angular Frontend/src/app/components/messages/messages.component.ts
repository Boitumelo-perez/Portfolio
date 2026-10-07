import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  scrolled = false;
  messages: any[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.get('https://message-app.free.beeceptor.com', { headers }).subscribe(
      // this.http.get('http://localhost:8000/api/messages/', { headers }).subscribe(
        (res: any) => this.messages = res,
        (err) => console.error('Failed to load messages', err)
      );
    }
  }
}



// onMouseMove(event: MouseEvent): void {
//   const target = event.target as HTMLElement;
//   const rect = target.getBoundingClientRect();
//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;
//   target.style.setProperty('--x', `${x}px`);
//   target.style.setProperty('--y', `${y}px`);
// }
