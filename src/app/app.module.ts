import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { CreateModule } from './features/create/create.module';
import { AuthService } from './auth/services/auth.service';
import { AuthInterceptorService } from './auth/interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    LoginModule,
    RegistrationModule,
    CreateModule
  ],
  providers: [
    AuthService,
    { provide: 'Window',  useValue: window },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
     },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
