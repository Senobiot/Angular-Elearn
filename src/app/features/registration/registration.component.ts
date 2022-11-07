import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  userData = {};

  constructor() {
    this._createForm();
   }

  onSubmit(data: any): void {
    this.userData = data;;
  }

  ngOnInit(): void {
  }

  private _createForm() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-z]/),
        Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }
}
