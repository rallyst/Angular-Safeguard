import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavigationModule } from '../../shared/components/navigation/navigation.module';
import { LogoModule } from '../../shared/components/logo/logo.module';
import { ButtonModule } from '../../shared/components/button/button.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    LogoModule,
    ButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
