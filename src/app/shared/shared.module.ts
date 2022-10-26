import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, UserNameComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  UserNameComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: components,
})
export class SharedModule { }
