import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Declaring AppComponent as standalone
  imports: [HomepageComponent, RouterModule]  // Import RouterModule and HomepageComponent
})
export class AppComponent { }
