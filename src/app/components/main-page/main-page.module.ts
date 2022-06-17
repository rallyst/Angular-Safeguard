import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { HomeModule } from '../home/home.module';
import { ContactFormModule } from '../contact-form/contact-form.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ContactFormModule,
    LogoModule
  ]
})
export class MainPageModule { }
