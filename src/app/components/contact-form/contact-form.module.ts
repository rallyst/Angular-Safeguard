import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from '../../ng-material/ng-material.module';
import { ButtonModule } from '../../shared/components/button/button.module';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgMaterialModule,
    ButtonModule
  ],
  exports: [
    ContactFormComponent
  ]
})
export class ContactFormModule { }
