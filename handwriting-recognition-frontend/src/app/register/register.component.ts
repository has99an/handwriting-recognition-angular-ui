import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-register',
  standalone: true,  // Declare as a standalone component
  imports: [FormsModule],  // Import FormsModule to enable ngModel
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onRegister() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }
    // Add your registration logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
