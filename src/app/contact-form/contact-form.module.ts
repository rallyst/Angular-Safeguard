import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from '../ng-material/ng-material.module';


@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgMaterialModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
