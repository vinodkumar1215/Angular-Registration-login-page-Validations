import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signupUser(registrationForm : NgForm){
    console.log(registrationForm);
    console.log(registrationForm.value.emailAddress);
    console.log(registrationForm.value.nameField);
    console.log(registrationForm.value.passwordField);
    console.log(registrationForm.value.passwordField);
    console.log(registrationForm.value.termsField) 
  }

}
