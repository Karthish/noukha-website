import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'services', component: ServicesComponent }
  ];
  
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BrandingRoutingModule { }