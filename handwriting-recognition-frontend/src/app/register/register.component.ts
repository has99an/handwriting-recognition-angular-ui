import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';  // Import AuthService
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],  // Include HttpClientModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }

    // Call the register method in the AuthService
    this.authService.register(this.email, this.password).subscribe(
      response => {
        console.log('Registration successful:', response);
        // Handle success (e.g., show a success message or redirect the user)
      },
      (error: HttpErrorResponse) => {
        console.error('Registration failed:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }
}
