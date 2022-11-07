import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, UserNameComponent, SearchComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidatorDirective } from './utils';
import { DurationPipe } from './pipes/duration.pipe';

const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  UserNameComponent,
  SearchComponent
]

@NgModule({
  declarations: [components, EmailValidatorDirective, DurationPipe],
  imports: [
    CommonModule,
    FontAwesomeModule, 
  ],
  exports: [components, EmailValidatorDirective, DurationPipe]
})
export class SharedModule { }
