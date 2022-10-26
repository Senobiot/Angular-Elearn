import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CourseModule } from '../course/course.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseModule
  ],

  exports: [
    CoursesComponent,
    SharedModule,
  ]
})
export class CoursesModule { }

