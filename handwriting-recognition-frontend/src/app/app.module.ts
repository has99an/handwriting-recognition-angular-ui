import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routes } from './app.routes';  // Import routes from app.routes.ts
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule here

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,  // Only include non-standalone components here
  ],
  imports: [
    HttpClientModule,  // Make sure HttpClientModule is included here
    BrowserModule,
    RouterModule.forRoot(routes)  // Configure the router with routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
