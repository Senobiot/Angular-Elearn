import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CreateComponent } from './features/create/create.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  {  path: 'login',
    loadChildren: () => import('./features/login/login.component').then(m => m.LoginComponent), },
  
  { path: 'registration', component: RegistrationComponent },
  { path: 'create', component: CreateComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path:'**'   , component: LoginComponent  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
