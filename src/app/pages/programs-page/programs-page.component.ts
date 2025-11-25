import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-programs-page',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './programs-page.component.html',
  styleUrl: './programs-page.component.css'
})
export class ProgramsPageComponent {
  protected readonly programs = signal([
    {
      name: 'Ciencia y Tecnología',
      image: 'assets/img/event-1.jpg',
      summary: 'Laboratorios móviles, robótica y pensamiento computacional para primaria, secundaria y media.',
      bullets: ['Robots educativos Thymio', 'Clubes STEAM con retos semanales', 'Kits listos para aula con guías docentes']
    },
    {
      name: 'Etnoeducación digital',
      image: 'assets/img/event-2.jpg',
      summary: 'Tecnología que habla la lengua del territorio y protege saberes ancestrales.',
      bullets: ['Diseño de contenidos bilingües', 'Proyectos con líderes comunitarios', 'Evaluación con enfoque diferencial']
    },
    {
      name: 'Talento y empleabilidad',
      image: 'assets/img/blog-3.jpg',
      summary: 'Trayectos para jóvenes y adultos que conectan con la economía digital y emprendimiento.',
      bullets: ['Pensamiento computacional y datos', 'Retos con empresas aliadas', 'Mentorías y orientación laboral']
    }
  ]);

  protected readonly extras = signal([
    {
      title: 'Formación docente',
      desc: 'Acompañamos a maestras y maestros para que la tecnología se quede en el aula.',
      icon: '🎓'
    },
    {
      title: 'Investigación + innovación',
      desc: 'Medimos impacto y iteramos con comunidades para mantener pertinencia cultural.',
      icon: '🧪'
    },
    {
      title: 'Aliados y financiación',
      desc: 'Articulamos empresas, gobiernos y academia para asegurar sostenibilidad.',
      icon: '🤝'
    }
  ]);
}
