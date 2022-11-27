import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/auth/guards/admin.guard';
import { CourseComponent } from '../course/course.component';
import { CreateComponent } from '../create/create.component';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    children: [
      { path: ':id',
      component: CourseComponent

       },
      { path: 'edit/:id',
        loadChildren: () => import('../course/course.module').then(m => m.CourseModule),
        canActivate: [AdminGuard],
       }
    ]
  },
  {
    path: 'add',
    component: CreateComponent,
    canActivate: [AdminGuard],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }