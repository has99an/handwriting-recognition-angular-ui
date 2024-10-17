import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = 'http://127.0.0.1:8000';  // Base URL for your FastAPI backend

  constructor(private http: HttpClient) {}

  // Get upload history for a specific user
  getUserUploads(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/uploads/${userId}`);
  }
}
