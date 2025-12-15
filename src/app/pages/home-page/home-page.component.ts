import { Component, signal } from '@angular/core';
import { Carrusel } from '../../secciones/carrusel/carrusel';
import { About } from '../../secciones/about/about';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Carrusel, About, TranslocoModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  protected readonly heroSlides = signal([
    {
      title: 'Innovación educativa que respeta el territorio',
      copy: 'Co-creamos experiencias STEAM con comunidades indígenas, afrodescendientes y rurales para cerrar brechas digitales sin perder identidad cultural.',
      image: 'assets/img/carousel-1.jpg'
    },
    {
      title: 'Tecnología para la paz y la prosperidad',
      copy: 'Articulamos gobiernos, academia y empresas para que la ciencia y la innovación sean motores de bienestar colectivo.',
      image: 'assets/img/carousel-2.jpg'
    },
    {
      title: 'Programas listos para llegar a tu aula',
      copy: 'Formación docente, acompañamiento y robots educativos que hablan la lengua del territorio.',
      image: 'assets/img/carousel-3.jpg'
    }
  ]);

  protected readonly highlights = signal([
    { label: 'Departamentos impactados', value: '11', icon: '🗺️' },
    { label: 'Docentes formados', value: '800+', icon: '👩‍🏫' },
    { label: 'Estudiantes inspirados', value: '15.000+', icon: '🚀' },
    { label: 'Aliados estratégicos', value: '25', icon: '🤝' }
  ]);

  protected readonly impactCards = signal([
    {
      title: 'Laboratorios inmersivos',
      description: 'Módulos móviles que llegan donde más se necesitan con kits STEAM y facilitadores locales.',
      image: 'assets/img/page-header.jpg'
    },
    {
      title: 'Docentes empoderados',
      description: 'Acompañamiento continuo, mentorías y contenidos bilingües para aulas diversas.',
      image: 'assets/img/event-2.jpg'
    },
    {
      title: 'Robots con propósito',
      description: 'Thymio y tecnologías abiertas que inspiran creatividad, curiosidad y pensamiento crítico.',
      image: 'assets/img/blog-1.jpg'
    }
  ]);

  protected readonly programPreview = signal([
    {
      name: 'Ciencia y Tecnología',
      desc: 'Laboratorios móviles, robótica y pensamiento computacional para todos los niveles educativos.',
      image: 'assets/img/event-1.jpg'
    },
    {
      name: 'Etnoeducación digital',
      desc: 'Contenidos bilingües y proyectos con comunidades para preservar su cosmovisión a través de la tecnología.',
      image: 'assets/img/event-2.jpg'
    },
    {
      name: 'Talento y empleabilidad',
      desc: 'Rutas de formación para jóvenes y adultos que conectan con la economía digital y el emprendimiento.',
      image: 'assets/img/blog-3.jpg'
    }
  ]);

  protected readonly news = signal([
    {
      title: 'Thymio: el robot que transforma la educación',
      desc: 'Exploramos cómo la robótica con Thymio despierta creatividad y pensamiento crítico.',
      image: 'assets/img/blog-1.jpg'
    },
    {
      title: 'Impacto global, enfoque local',
      desc: 'Historias de aulas que integran innovación con identidad cultural.',
      image: 'assets/img/blog-2.jpg'
    },
    {
      title: 'Tecnología que cuida el planeta',
      desc: 'Programas que vinculan ciencia, sostenibilidad y dignidad humana.',
      image: 'assets/img/blog-3.jpg'
    }
  ]);

  protected readonly gallery = signal([
    {
      title: 'Laboratorios móviles',
      image: 'assets/img/carousel-1.jpg',
      tag: 'STEAM en territorio'
    },
    {
      title: 'Formación docente',
      image: 'assets/img/carousel-2.jpg',
      tag: 'Mentorías'
    },
    {
      title: 'Thymio en acción',
      image: 'assets/img/event-1.jpg',
      tag: 'Robótica bilingüe'
    },
    {
      title: 'Jornadas creativas',
      image: 'assets/img/event-2.jpg',
      tag: 'Innovación social'
    },
    {
      title: 'Ciencia y cultura',
      image: 'assets/img/blog-2.jpg',
      tag: 'Identidad'
    },
    {
      title: 'Historias Samval',
      image: 'assets/img/blog-3.jpg',
      tag: 'Comunidad'
    }
  ]);

  protected readonly territories = signal([
    {
      region: 'Caribe',
      description: 'San Basilio de Palenque · Robótica bilingüe y preservación de lengua.'
    },
    {
      region: 'Sierra Nevada',
      description: 'Arahuacos · Robots móviles integrados a su cosmovisión.'
    },
    {
      region: 'Andina',
      description: 'Antioquia y Cundinamarca · Formación docente y clubes STEAM.'
    }
  ]);
}
