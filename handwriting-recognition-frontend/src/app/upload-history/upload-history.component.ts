import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { SessionManagementService } from '../session-management.service';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf and *ngFor

@Component({
  selector: 'app-upload-history',
  templateUrl: './upload-history.component.html',
  styleUrls: ['./upload-history.component.css'],
  standalone: true,  // Standalone component
  imports: [CommonModule]  // Import CommonModule here
})
export class UploadHistoryComponent implements OnInit {
  uploads: any[] = [];
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

  loadUploads(): void {
    if (this.userId) {
      this.uploadService.getUserUploads(this.userId).subscribe({
        next: (response) => {
          this.uploads = response;
          console.log('Uploads retrieved successfully', this.uploads);
        },
        error: (error) => {
          console.error('Error retrieving uploads:', error);
        }
      });
    }
  }
}
