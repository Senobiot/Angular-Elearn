import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CourseModule } from '../course/course.module';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseModule,
    CoursesRoutingModule
  ],
  exports: [
    CoursesComponent,
    SharedModule,
  ]
})
export class CoursesModule { }
