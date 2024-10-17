// navbar.component.ts

import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SessionManagementService } from '../session-management.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menuActive: boolean = false;
  userEmail: string | null = null;

  constructor(private sessionService: SessionManagementService,
    private router: Router
  ) {}

  ngOnInit() {
    const sessionData = this.sessionService.getSession();
    if (sessionData && sessionData.email) {
      this.userEmail = sessionData.email;
    }
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  closeMenu() {
    this.menuActive = false;
  }

  logout() {
    this.sessionService.endSession(); // Use endSession() here
    this.userEmail = null;
    this.router.navigate(['/login']);
  }
}
