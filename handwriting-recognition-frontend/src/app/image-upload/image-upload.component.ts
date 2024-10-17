import { Component, OnInit } from '@angular/core'; // Import OnInit
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SessionManagementService } from '../session-management.service'; // Import SessionManagementService

@Component({
  selector: 'app-image-upload',
  standalone: true,
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
  imports: [CommonModule],
})
export class ImageUploadComponent implements OnInit { // Implement OnInit
  userEmail: string | null = null; // Property to hold the user's email
  userId: number | null = null;    // Property to hold the user's ID

  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  apiResponse: any;
  isFileSelected: boolean = false;

  constructor(
    private http: HttpClient,
    private sessionService: SessionManagementService // Inject SessionManagementService
  ) {}

  ngOnInit() {
    // Retrieve the user's email and id from the session
    const sessionData = this.sessionService.getSession();
    if (sessionData) {
      this.userEmail = sessionData.email;
      this.userId = sessionData.user_id;  // Retrieve user ID
      console.log('Logged-in user email:', this.userEmail);
      console.log('Logged-in user ID:', this.userId);
    } else {
      console.warn('No user data found in session.');
      // Optionally, redirect to the login page if not logged in
      // this.router.navigate(['/login']);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      this.isFileSelected = true;
      console.log('File selected:', this.selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      this.isFileSelected = false; // Reset to false if no file is selected
    }
  }

  uploadImage() {
    console.log('Upload button clicked');
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
  
      // Append the user ID to the FormData
      if (this.userId) {
        formData.append('user_id', this.userId.toString());  // Ensure user_id is appended as a form field
      }
  
      // Make the POST request
      this.http
        .post('http://127.0.0.1:8000/predict', formData, { responseType: 'blob' })
        .subscribe({
          next: (response) => {
            const blob = new Blob([response], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            window.open(url); // Opens the PDF in a new tab
          },
          error: (error) => {
            console.error('Upload error:', error);
          },
        });
    } else {
      console.error('No image selected');
    }
  }
  
}
