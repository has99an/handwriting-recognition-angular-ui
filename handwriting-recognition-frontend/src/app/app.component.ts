import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component'; // Importér ImageUploadComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageUploadComponent], // Tilføj ImageUploadComponent her
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']   
})
export class AppComponent {
  title = 'handwriting-recognition-frontend';
}
