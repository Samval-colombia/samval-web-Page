import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

interface BlogPost {
  id: number;
  image: string;
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-blog',
  imports: [TranslocoModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  blogPosts = signal<BlogPost[]>([
    {
    id: 1,
    image: 'assets/blog-1.jpg',
    titleKey: 'blog.post1.title',
    descriptionKey: 'blog.post1.description'
  },
  {
    id: 2,
    image: 'assets/blog-2.jpg',
    titleKey: 'blog.post2.title',
    descriptionKey: 'blog.post2.description'
  },
  {
    id: 3,
    image: 'assets/blog-3.jpg',
    titleKey: 'blog.post3.title',
    descriptionKey: 'blog.post3.description'
  }
  ]);
}


