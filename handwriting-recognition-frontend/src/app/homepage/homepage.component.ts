import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule for navigation if needed

@Component({
  selector: 'app-homepage',
  standalone: true,  // Declare the component as standalone
  imports: [RouterModule],  // Import RouterModule here (if you plan to navigate using routerLink)
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  // Add any logic here if necessary
}
