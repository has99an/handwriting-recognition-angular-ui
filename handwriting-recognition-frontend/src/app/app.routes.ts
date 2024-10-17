import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./homepage/homepage.component').then((m) => m.HomepageComponent),
  }, // Homepage route
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  }, // Login page route
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((m) => m.RegisterComponent),
  }, // Register page route
  {
    path: 'image-upload',
    loadComponent: () =>
      import('./image-upload/image-upload.component').then(
        (m) => m.ImageUploadComponent
      ),
  }, 
  {
  path: 'upload-history',
  loadComponent: () =>
    import('./upload-history/upload-history.component').then(
      (m) => m.UploadHistoryComponent
    ),
}, // Upload History page route
];
