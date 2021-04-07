import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'amenities', component: AmenitiesComponent},
  { path: 'testimonials', component: TestimonialsComponent},
  { path: 'contact', component: ContactUsComponent},
  { path: '', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
