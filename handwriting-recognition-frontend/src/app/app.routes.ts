import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },  // Route to HomepageComponent
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },  // Lazy load LoginComponent
  { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },  // Lazy load RegisterComponent
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
