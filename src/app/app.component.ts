import { Component } from '@angular/core';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('carouselImage', [
      state('focus', style({ left: '0' })),
      state('right', style({ left: '100%' })),
      state('left', style({ left: '-100%' })),
      transition('* <-> focus', animate('.5s ease-out'))
    ])
  ]
})
export class AppComponent {
  /** The images for the carousel */
  carouselImages = [
    '/assets/example-1.jpeg',
    '/assets/example-2.jpeg',
    '/assets/example-3.jpeg',
    '/assets/example-4.jpeg',
    '/assets/example-5.jpeg'
  ]
  /** The current image by index */
  currentImage: number;

  constructor() {
    this.currentImage = 0;
  }

  /** Get the state of an image by its index */
  getState(index: number): 'right'|'left'|'focus' {
    if (this.currentImage === 0 && index === this.carouselImages.length - 1) return 'left';
    if (this.currentImage === this.carouselImages.length - 1 && index === 0) return 'right';
    if (index < this.currentImage) return 'left';
    if (index > this.currentImage) return 'right';
    return 'focus';
  }

  changeImage(direction: -1|1 = 1): void {
    if (direction < 0 && this.currentImage === 0) this.currentImage = this.carouselImages.length - 1;
    else if (direction > 0 && this.currentImage + 1 >= this.carouselImages.length) this.currentImage = 0;
    else this.currentImage += direction;
  }
}
