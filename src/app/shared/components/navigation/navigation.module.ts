import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { LogoComponent } from '../logo/logo.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [
    NavigationComponent
    // LogoComponent

  ],
  imports: [
    CommonModule,
    LogoModule

  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
