import { Component, OnInit } from '@angular/core';
import { Contact, ContactFocus } from 'src/app/contact/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact = {
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  }

  contactFocus: ContactFocus = {
    name: false,
    email: false,
    phoneNumber: false,
    message: false
  }

  onFocus: boolean = false

  contactForm : FormGroup

  constructor() { this.createContactForm() }

  ngOnInit() {
  }

  private createContactForm() {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.contact.email,[
        Validators.required,
        Validators.email
      ]),
      'phoneNumber': new FormControl(this.contact.phoneNumber, [
        Validators.required,
      ]),
      'message': new FormControl(this.contact.message,[
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get name() { return this.contactForm.get('name'); }

  get email() { return this.contactForm.get('email'); }

  get phoneNumber() { return this.contactForm.get('phoneNumber'); }

  get message() { return this.contactForm.get('message'); }


}
