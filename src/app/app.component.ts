import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** The images for the carousel */
  images = [
    '/assets/example-1.jpeg',
    '/assets/example-2.jpeg',
    '/assets/example-3.jpeg',
    '/assets/example-4.jpeg',
    '/assets/example-5.jpeg'
  ]
}
