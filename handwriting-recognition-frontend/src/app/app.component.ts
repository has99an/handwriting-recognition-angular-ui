import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Declaring AppComponent as standalone
  imports: [HomepageComponent, RouterModule, NavbarComponent] ,
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
`,

})
export class AppComponent { }
