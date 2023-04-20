import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';


import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PlansComponent } from './pages/plans/plans.component';

const routes: Routes = [
  {path:"",redirectTo:"",pathMatch:"full",component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:"Plans",component:PlansComponent},
  {path:"Contact",component:ContactComponent},
  {path:"footer",component:FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
