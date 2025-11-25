import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

interface CarouselSlide {
  id: number;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  buttonKey:string,
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

@Component({
  selector: 'app-carrusel',
  imports: [ TranslocoModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class Carrusel {


  currentIndex = signal(0);
  isPaused = signal(false);
  isTransitioning = signal(false);

  private autoplayInterval?: ReturnType<typeof setInterval>;
  private readonly AUTOPLAY_DELAY = 5000

  slides: CarouselSlide[] = [
    {
    id: 1,
    titleKey: 'hero.slide1.title',
    subtitleKey: 'hero.slide1.subtitle',
    descriptionKey: 'hero.slide1.description',
    buttonKey: 'hero.slide1.button',
    imageUrl: '/assets/carousel-1.jpg',
    buttonLink: '/programas'
  },
  {
    id: 2,
    titleKey: 'hero.slide2.title',
    subtitleKey: 'hero.slide2.subtitle',
    descriptionKey: 'hero.slide2.description',
    buttonKey: 'hero.slide2.button',
    imageUrl: '/assets/carousel-2.jpg',
    buttonLink: '/proyectos'
  },
  {
    id: 3,
    titleKey: 'hero.slide3.title',
    subtitleKey: 'hero.slide3.subtitle',
    descriptionKey: 'hero.slide3.description',
    buttonKey: 'hero.slide3.button',
    imageUrl: '/assets/carousel-3.jpg',
    buttonLink: '/etnoeducacion'
  }
  ];

  totalSlides = computed(() => this.slides.length);
  currentSlide = computed(() => this.slides[this.currentIndex()]);

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }


  nextSlide(): void {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    this.currentIndex.update(index =>
      index === this.totalSlides() - 1 ? 0 : index + 1
    );

    setTimeout(() => this.isTransitioning.set(false), 600);
  }

  prevSlide(): void {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    this.currentIndex.update(index =>
      index === 0 ? this.totalSlides() - 1 : index - 1
    );

    setTimeout(() => this.isTransitioning.set(false), 600);
  }

  goToSlide(index: number): void {
    if (this.isTransitioning() || index === this.currentIndex()) return;

    this.isTransitioning.set(true);
    this.currentIndex.set(index);

    setTimeout(() => this.isTransitioning.set(false), 600);
    this.restartAutoplay();
  }


  startAutoplay(): void {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      if (!this.isPaused()) {
        this.nextSlide();
      }
    }, this.AUTOPLAY_DELAY);
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = undefined;
    }
  }

  restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }

  // Mouse events
  onMouseEnter(): void {
    this.isPaused.set(true);
  }

  onMouseLeave(): void {
    this.isPaused.set(false);
  }


  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.prevSlide();
        break;
      case 'ArrowRight':
        this.nextSlide();
        break;
    }
  }

}
