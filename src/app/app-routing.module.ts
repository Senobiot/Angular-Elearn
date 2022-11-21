import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
    { path: 'registration',  loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule) },
    { path: 'create', loadChildren: () => import('./features/create/create.module').then(m => m.CreateModule) },
    { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterModule.forRoot([]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
