import { Component, OnInit, Input } from '@angular/core';
import { Contact, ContactFocus, ContactLanguage } from 'src/app/contact/contact.model';
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

  contactLanguage: ContactLanguage
  onFocus: boolean = false

  contactForm : FormGroup


  @Input() contactTitle: string


  @Input()
  set language(str: String){
    if(str == "pt-BR"){
      this.contactLanguage = {
        nameLabel: "Nome",
        emailLabel: "E-mail",
        phoneNumberLabel: "Telefone",
        messageLabel: "Mensagem",
        buttonLabel: "Enviar",
        nameRequiredLabel: "O nome é obrigatório",
        nameMinLenghtLabel: "Este nome é pequeno demais",
        emailRequiredLabel: "O e-mail é obrigatório",
        emailInvalidLabel: "Este e-mail não é válido",
        phoneNumberRequired: "O telefone é obrigatório",
        messageRequiredLabel: "A mensagem é obrigatória",
        messageMinLenghtLabel: "Esta mensagem é pequena demais."
      }
    }
    else{
      this.setDefaultLanguage()
    }
  }

  constructor() { 
    
    this.createContactForm()
    this.setDefaultLanguage()
  }

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

  private setDefaultLanguage(){
    this.contactLanguage = {
      nameLabel: "Name",
      emailLabel: "Email address",
      phoneNumberLabel: "Phone Number",
      messageLabel: "Message",
      buttonLabel: "Send",
      nameRequiredLabel: "The name is required.",
      nameMinLenghtLabel: "The name need at least 4 characters.",
      emailRequiredLabel: "The e-mail is required.",
      emailInvalidLabel: "This is not a valid e-mail.",
      phoneNumberRequired: "The phone number is required.",
      messageRequiredLabel: "The message is required.",
      messageMinLenghtLabel: "The message need at least 4 characters."
    }
  }
  get name() { return this.contactForm.get('name'); }

  get email() { return this.contactForm.get('email'); }

  get phoneNumber() { return this.contactForm.get('phoneNumber'); }

  get message() { return this.contactForm.get('message'); }


}
