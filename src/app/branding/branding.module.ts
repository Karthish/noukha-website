import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BrandingRoutingModule } from './branding-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './../shared/components/header/header.component';
import { FooterComponent } from './../shared/components/footer/footer.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ContactUsComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrandingRoutingModule
  ]
})
export class BrandingModule { }
