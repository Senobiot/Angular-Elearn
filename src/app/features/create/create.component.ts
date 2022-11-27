import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { AddRequest } from 'src/app/services/courses.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() authorsList: string[] = ['author One', 'author Two'];
  
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
      Validators.minLength(1)]),
  });

  onSubmit(data: AddRequest) {
    this.dataService.createCourse(data)
  }

  ngOnInit(): void {
  }

  constructor( private dataService: CoursesStoreService ){}

}
