import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';  // Import AuthService
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionManagementService } from '../session-management.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],  // Include HttpClientModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router, private sessionService: SessionManagementService) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }

    // Call the register method in the AuthService
    this.authService.register(this.email, this.password).subscribe(
      response => {
        console.log('Registration successful:', response);

        // Access the user ID from the session if needed
        const userId = this.sessionService.getUserId();
        console.log('User ID from session: ', userId);

        // Handle success (e.g., show a success message or redirect the user)
        this.router.navigate(['/image-upload']);
      },
      (error: HttpErrorResponse) => {
        console.error('Registration failed:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }
}
