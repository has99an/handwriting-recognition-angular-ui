import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-login',
  standalone: true,  // Declare as a standalone component
  imports: [FormsModule],  // Import FormsModule to enable ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    // Add your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
