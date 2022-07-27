import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    LogoModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
