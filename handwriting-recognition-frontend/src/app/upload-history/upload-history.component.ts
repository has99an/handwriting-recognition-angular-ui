import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { SessionManagementService } from '../session-management.service';
import { CommonModule } from '@angular/common';

interface Upload {
  id: number;
  user_id: number;
  image: string;
  pdf: string;
  created_at: string;
}

@Component({
  selector: 'app-upload-history',
  templateUrl: './upload-history.component.html',
  styleUrls: ['./upload-history.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class UploadHistoryComponent implements OnInit {
  uploads: Upload[] = [];
  userId: number | null = null;

  constructor(
    private uploadService: UploadService,
    private sessionService: SessionManagementService
  ) {}

  ngOnInit(): void {
    const sessionData = this.sessionService.getSession();
    if (sessionData && sessionData.user_id) {
      this.userId = sessionData.user_id;
      this.loadUploads();
    }
  }

  viewImage(upload: Upload): void {
    const blob = this.base64ToBlob(upload.image, 'image/png');
    const url = URL.createObjectURL(blob);
    window.open(url);
  }

  viewPdf(upload: Upload): void {
    const blob = this.base64ToBlob(upload.pdf, 'application/pdf');
    const url = URL.createObjectURL(blob);
    window.open(url);
  }
  
  
  base64ToBlob(base64: string, type: string): Blob {
    const byteCharacters = atob(base64.split(',')[1]); // Split for data URL
    const byteNumbers = new Uint8Array(byteCharacters.length);
    
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    
    return new Blob([byteNumbers], { type: type });
  }
  

  loadUploads(): void {
    if (this.userId) {
      this.uploadService.getUserUploads(this.userId).subscribe({
        next: (response: Upload[]) => {
          // Decode Base64 data
          this.uploads = response.map(upload => ({
            ...upload,
            image: `data:image/png;base64,${upload.image}`,
            pdf: `data:application/pdf;base64,${upload.pdf}`
          }));
          console.log('Uploads retrieved successfully', this.uploads);
        },
        error: (error) => {
          console.error('Error retrieving uploads:', error);
        }
      });
    }
  }
}
