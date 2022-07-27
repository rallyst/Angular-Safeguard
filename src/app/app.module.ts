import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormModule } from './components/contact-form/contact-form.module';
import { HomeModule } from './components/home/home.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { MenuModule } from './components/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactFormModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
