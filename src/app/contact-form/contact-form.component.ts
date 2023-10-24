import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(form: any) {
    // You can handle the form submission here, e.g., send the data to a server
    console.log('Form data:', this.contactData);
    form.resetForm();
  }
}
