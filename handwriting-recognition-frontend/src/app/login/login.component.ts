import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthService } from '../auth.service';  // Import AuthService
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
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


  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Navigate to the ImageUploadComponent
        this.router.navigate(['/image-upload']);
      },
      error: (error) => {
        console.error('Login failed', error);
        // Optionally, display an error message to the user
      }
    });
}
}