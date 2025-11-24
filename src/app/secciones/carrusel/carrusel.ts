import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

@Component({
  selector: 'app-carrusel',
  imports: [RouterLink],
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
      title: 'Fundación SAMVAL',
      subtitle: 'Transformando vidas a través de la educación',
      description: 'Promovemos el pensamiento computacional, ciencia e innovación en comunidades vulnerables de Colombia',
      imageUrl: '/assets/carousel-1.jpg',
      buttonText: 'Conoce Nuestros Programas',
      buttonLink: '/programas'
    },
    {
      id: 2,
      title: 'Robótica Educativa',
      subtitle: 'Aprendizaje práctico con tecnología',
      description: 'Desarrollamos competencias del siglo XXI a través de la programación y robótica educativa',
      imageUrl: '/assets/carousel-2.jpg',
      buttonText: 'Ver Proyectos',
      buttonLink: '/proyectos'
    },
    {
      id: 3,
      title: 'Etnoeducación y Cultura',
      subtitle: 'Preservando nuestras raíces',
      description: 'Programas educativos que integran tecnología con el respeto y valoración de la diversidad cultural',
      imageUrl: '/assets/carousel-3.jpg',
      buttonText: 'Conocer Más',
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
