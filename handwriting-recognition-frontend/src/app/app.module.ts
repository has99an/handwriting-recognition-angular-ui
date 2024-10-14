import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule for handling forms

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routes } from './app.routes';  // Import routes from app.routes.ts

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,  // Declare LoginComponent
    RegisterComponent  // Declare RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Import FormsModule to enable ngModel
    RouterModule.forRoot(routes)  // Configure the router with routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
