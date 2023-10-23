import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent {
  images = [
    '../../assets/Imgs/mobile-view8.png',
    '../../assets/Imgs/mobile-view1.png',
    '../../assets/Imgs/mobile-view2.png',
    '../../assets/Imgs/mobile-view3.png',
    '../../assets/Imgs/mobile-view4.png',
    '../../assets/Imgs/mobile-view5.png',
    '../../assets/Imgs/mobile-view6.png',
    '../../assets/Imgs/mobile-view7.png',
  ];

  currentIndex = 0;

  nextImage() {
    console.log('Next image clicked');
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    console.log('Current index:', this.currentIndex);
  }

  prevImage() {
    console.log('Previous image clicked');
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    console.log('Current index:', this.currentIndex);
  }
}
