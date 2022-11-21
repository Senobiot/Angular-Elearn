import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateRoutingModule } from './create-routing.module';


@NgModule({
  declarations: [
    CreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    CreateRoutingModule
  ],
  exports: [
    CreateComponent
  ]
})
export class CreateModule { }
