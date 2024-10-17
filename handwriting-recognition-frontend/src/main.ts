import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

const { providers: appConfigProviders, ...restAppConfig } = appConfig;  // Destructure appConfig to separate providers

bootstrapApplication(AppComponent, {
  providers: [
    ...(appConfigProviders || []),  // Use appConfig providers if they exist
    provideHttpClient(),            // Add additional providers
  ],
  ...restAppConfig  // Spread the rest of the appConfig, excluding providers
})
.catch((err) => console.error(err));
