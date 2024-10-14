import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-image-upload',
  standalone: true,
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
  imports: [CommonModule]
})
export class ImageUploadComponent {
  constructor(private http: HttpClient) {}
  
  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null; 
  apiResponse: any;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
      console.log('Valgt fil:', this.selectedFile); // Debugging
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  uploadImage() {
    console.log('Upload-knap trykket'); // Debugging
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.http.post('http://127.0.0.1:8000/predict', formData).subscribe({
        next: (response) => {
          console.log('API-svar:', response);
          this.apiResponse = response;
        },
        error: (error) => {
          console.error('Upload-fejl:', error);
        }
      });
    } else {
      console.error('Ingen billede valgt');
    }
  }
  
}
