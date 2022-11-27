import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, UserNameComponent, SearchComponent } from './components';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidatorDirective } from './utils';
import { DurationPipe } from './pipes/duration.pipe';
import { CreationDatePipe } from './pipes/date.pipe';

const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  UserNameComponent,
  SearchComponent
]

@NgModule({
  declarations: [components, EmailValidatorDirective, DurationPipe, CreationDatePipe],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [components, EmailValidatorDirective, DurationPipe, CreationDatePipe]
})
export class SharedModule { }
