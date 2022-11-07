import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
