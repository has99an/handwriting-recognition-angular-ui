import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';  // Import tap for side effects
import { SessionManagementService } from './session-management.service';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/auth/register';  // FastAPI URL
  private loginUrl = 'http://127.0.0.1:8000/auth/login';   // Login URL

  constructor(private http: HttpClient, private sessionService: SessionManagementService) {}

  register(email: string, password: string): Observable<any> {
    const body = { email, password };

    // Handle response to include user_id
    return this.http.post(this.apiUrl, body).pipe(
      tap((response: any) => {
        // Store email and user_id in the session
        this.sessionService.setSession({ email, user_id: response.user_id });
        console.log("Session set with user ID: " + response.user_id);
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };

    // Handle response to include user_id
    return this.http.post(this.loginUrl, body).pipe(
      tap((response: any) => {
        // Store email and user_id in the session
        this.sessionService.setSession({ email, user_id: response.user_id });
        console.log("Session set with user ID: " + response.user_id);
      })
    );
  }
}
