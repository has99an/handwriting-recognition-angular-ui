import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SessionManagementService {
  private sessionKey = 'user_session';

  // Set the session data in localStorage
  setSession(sessionData: any): void {
    localStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
  }

  // Retrieve session data from localStorage
  getSession(): any | null {
    const session = localStorage.getItem(this.sessionKey);
    return session ? JSON.parse(session) : null;
  }

  // Get the user ID from the session
  getUserId(): number | null {
    const session = this.getSession();
    return session ? session.user_id : null;
  }

  // End the session by removing the session data
  endSession(): void {
    localStorage.removeItem(this.sessionKey);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.getSession();
  }
}
