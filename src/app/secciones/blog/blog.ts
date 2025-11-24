import { Component, signal } from '@angular/core';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  blogPosts = signal<BlogPost[]>([
    {
      id: 1,
      image: 'assets/blog-1.jpg',
      title: 'Qué es Thymio',
      description: 'Thymio es un robot educativo diseñado para enseñar habilidades de programación y robótica a estudiantes de todas las edades.'
    },
    {
      id: 2,
      image: 'assets/blog-2.jpg',
      title: 'Impacto Global',
      description: 'Thymio está transformando la educación en países de todo el mundo al promover el aprendizaje STEM y cerrar la brecha digital.'
    },
    {
      id: 3,
      image: 'assets/blog-3.jpg',
      title: 'Historias de Éxito',
      description: 'Descubre cómo Thymio ha sido implementado en escuelas y comunidades para fomentar el pensamiento crítico y la creatividad.'
    }
  ]);
}


