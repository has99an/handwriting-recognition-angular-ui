import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
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
