import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BrandingRoutingModule } from './branding-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    BrandingRoutingModule
  ]
})
export class BrandingModule { }