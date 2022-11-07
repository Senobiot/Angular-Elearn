import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() authorsList: any[] = ['author One', 'author Two'];
  
  registrationForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-z]/),
      Validators.minLength(3)]),
    description: new FormControl(''),
    author: new FormControl(''),
    duration: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]/),
      Validators.minLength(3)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
