import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-contact',
    imports: [FontAwesomeModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    faMapMarkerAlt = faMapMarkerAlt;
    faEnvelope = faEnvelope;
    faPhone = faPhone;
    faGithub = faGithub;
    faLinkedin = faLinkedin;
}
