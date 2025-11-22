import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  protected readonly heroSlides = signal([
    {
      title: 'Innovación educativa que respeta el territorio',
      copy: 'Co-creamos experiencias STEAM con comunidades indígenas, afrodescendientes y rurales para cerrar brechas digitales sin perder identidad cultural.',
      image: '/resource-web/www.samval.org/img/carousel-1.jpg'
    },
    {
      title: 'Tecnología para la paz y la prosperidad',
      copy: 'Articulamos gobiernos, academia y empresas para que la ciencia y la innovación sean motores de bienestar colectivo.',
      image: '/resource-web/www.samval.org/img/carousel-2.jpg'
    },
    {
      title: 'Programas listos para llegar a tu aula',
      copy: 'Formación docente, acompañamiento y robots educativos que hablan la lengua del territorio.',
      image: '/resource-web/www.samval.org/img/carousel-3.jpg'
    }
  ]);

  protected readonly highlights = signal([
    { label: 'Departamentos impactados', value: '11', icon: 'fa-map-marked-alt' },
    { label: 'Docentes formados', value: '800+', icon: 'fa-chalkboard-teacher' },
    { label: 'Estudiantes inspirados', value: '15.000+', icon: 'fa-rocket' },
    { label: 'Aliados estratégicos', value: '25', icon: 'fa-handshake' }
  ]);

  protected readonly programPreview = signal([
    {
      name: 'Ciencia y Tecnología',
      desc: 'Laboratorios móviles, robótica y pensamiento computacional para todos los niveles educativos.',
      image: '/resource-web/www.samval.org/img/event-1.jpg'
    },
    {
      name: 'Etnoeducación digital',
      desc: 'Contenidos bilingües y proyectos con comunidades para preservar su cosmovisión a través de la tecnología.',
      image: '/resource-web/www.samval.org/img/event-2.jpg'
    },
    {
      name: 'Talento y empleabilidad',
      desc: 'Rutas de formación para jóvenes y adultos que conectan con la economía digital y el emprendimiento.',
      image: '/resource-web/www.samval.org/img/blog-3.jpg'
    }
  ]);

  protected readonly news = signal([
    {
      title: 'Thymio: el robot que transforma la educación',
      desc: 'Exploramos cómo la robótica con Thymio despierta creatividad y pensamiento crítico.',
      image: '/resource-web/www.samval.org/img/blog-1.jpg'
    },
    {
      title: 'Impacto global, enfoque local',
      desc: 'Historias de aulas que integran innovación con identidad cultural.',
      image: '/resource-web/www.samval.org/img/blog-2.jpg'
    },
    {
      title: 'Tecnología que cuida el planeta',
      desc: 'Programas que vinculan ciencia, sostenibilidad y dignidad humana.',
      image: '/resource-web/www.samval.org/img/blog-3.jpg'
    }
  ]);

  protected readonly gallery = signal([
    {
      title: 'Laboratorios móviles',
      image: '/resource-web/www.samval.org/img/carousel-1.jpg',
      tag: 'STEAM en territorio'
    },
    {
      title: 'Formación docente',
      image: '/resource-web/www.samval.org/img/carousel-2.jpg',
      tag: 'Mentorías'
    },
    {
      title: 'Thymio en acción',
      image: '/resource-web/www.samval.org/img/event-1.jpg',
      tag: 'Robótica bilingüe'
    },
    {
      title: 'Jornadas creativas',
      image: '/resource-web/www.samval.org/img/event-2.jpg',
      tag: 'Innovación social'
    },
    {
      title: 'Ciencia y cultura',
      image: '/resource-web/www.samval.org/img/blog-2.jpg',
      tag: 'Identidad'
    },
    {
      title: 'Historias Samval',
      image: '/resource-web/www.samval.org/img/blog-3.jpg',
      tag: 'Comunidad'
    }
  ]);
}
