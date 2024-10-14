import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HomepageComponent } from './homepage/homepage.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Declaring AppComponent as standalone
  imports: [HomepageComponent, RouterModule]  // Import RouterModule here
})
export class AppComponent { }
