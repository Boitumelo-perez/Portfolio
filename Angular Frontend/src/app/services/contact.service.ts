import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
phone: any;
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private apiUrl = 'http://localhost:8000/api/contact/';
  private apiUrl = 'https://portfolio-prvj.onrender.com/api/contact/';

  constructor(private http: HttpClient) { }

  sendMessage(data: ContactFormData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
