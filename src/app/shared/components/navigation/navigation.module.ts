import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ButtonModule } from "../button/button.module";
import { NgMaterialModule } from "../../../ng-material/ng-material.module";
import { MenuModule } from "../../../components/menu/menu.module";

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule,
    NgMaterialModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
