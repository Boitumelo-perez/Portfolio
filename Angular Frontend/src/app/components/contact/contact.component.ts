import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ContactService, ContactFormData } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    imports: [FontAwesomeModule, CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    providers: [ContactService]
})
export class ContactComponent {
    faMapMarkerAlt = faMapMarkerAlt;
    faEnvelope = faEnvelope;
    faPhone = faPhone;
    faGithub = faGithub;
    faLinkedin = faLinkedin;


formData: ContactFormData = {
    name: '',
    email: '',
    subject: 'PORTFOLIO NOTIFICATION!',
    message: '',
    phone: '',
  };

  successMessage = 'Success! Your message has been sent.';
  errorMessage = 'Error sending message';

  constructor(private contactService: ContactService) {}

  onSubmit() {
  console.log('Form submitted:', this.formData);

  this.contactService.sendMessage(this.formData).subscribe({
    next: () => {
      this.successMessage = 'Your message has been sent!';
      this.errorMessage = '';
      this.formData = { name: '', email: '', subject: '', message: '', phone: '' }; // Reset form data
    },
    error: (err) => {
      this.errorMessage = 'There was an error sending your message.';
      this.successMessage = '';
      console.error(err);
    }
  });
}

}