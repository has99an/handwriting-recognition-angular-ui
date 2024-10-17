import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionManagementService } from './session-management.service';
import { Component } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/auth/register';  // Replace with your FastAPI URL
  private loginUrl = 'http://127.0.0.1:8000/auth/login';        // Login URL

  constructor(private http: HttpClient, private sessionService: SessionManagementService) {}

  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    this.sessionService.setSession({email});
    console.log("sessions mail er det her: " + this.sessionService.getSession().email);
    return this.http.post(this.apiUrl, body);
  }


  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    this.sessionService.setSession({email});
    return this.http.post(this.loginUrl, body);
  }
  
}
