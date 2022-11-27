import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/courses' },
    {
      path: 'courses',
      loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),
      canDeactivate: [AuthorizedGuard],
    },
    { path: 'registration',
    loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule),
    canActivate: [NotAuthorizedGuard],
    },
    { path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
