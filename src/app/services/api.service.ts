import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * Servicio centralizado para todas las llamadas API
 * */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  // Configuración base
  private readonly API_BASE_URL = environment.apiUrl || 'https://api.samval.org';
  private readonly API_VERSION = 'v1';

  private get baseUrl(): string {
    return `${this.API_BASE_URL}/${this.API_VERSION}`;
  }

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }


  getProgramsPage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/programs-page`, {
      headers: this.headers
    });
  }


  updateProgramsPage(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/programs-page`, data, {
      headers: this.headers
    });
  }


  updateProgramsPageHero(hero: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/programs-page/hero`, hero, {
      headers: this.headers
    });
  }


  updateProgramsPagePrograms(programs: any[]): Observable<any> {
    return this.http.patch(`${this.baseUrl}/programs-page/programs`, { programs }, {
      headers: this.headers
    });
  }

  // ========================================
  // About Page Endpoints
  // ========================================

  getAboutPage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/about-page`, {
      headers: this.headers
    });
  }

  updateAboutPage(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/about-page`, data, {
      headers: this.headers
    });
  }

  updateAboutPageHero(hero: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/about-page/hero`, hero, {
      headers: this.headers
    });
  }



  getContactPage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/contact-page`, {
      headers: this.headers
    });
  }

  updateContactPage(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/contact-page`, data, {
      headers: this.headers
    });
  }

  // ========================================
  // Blog Posts Endpoints
  // ========================================

  getBlogPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/blog-posts`, {
      headers: this.headers
    });
  }

  getBlogPost(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/blog-posts/${id}`, {
      headers: this.headers
    });
  }

  createBlogPost(post: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/blog-posts`, post, {
      headers: this.headers
    });
  }

  updateBlogPost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/blog-posts/${id}`, post, {
      headers: this.headers
    });
  }

  deleteBlogPost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/blog-posts/${id}`, {
      headers: this.headers
    });
  }

  // ========================================
  // Events Endpoints
  // ========================================

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/events`, {
      headers: this.headers
    });
  }

  getEvent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/${id}`, {
      headers: this.headers
    });
  }

  createEvent(event: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/events`, event, {
      headers: this.headers
    });
  }

  updateEvent(id: number, event: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/events/${id}`, event, {
      headers: this.headers
    });
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/events/${id}`, {
      headers: this.headers
    });
  }

  // ========================================
  // Services Endpoints
  // ========================================

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/services`, {
      headers: this.headers
    });
  }

  // ========================================
  // Carousel Endpoints
  // ========================================

  getCarouselSlides(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/carousel-slides`, {
      headers: this.headers
    });
  }

  updateCarouselSlides(slides: any[]): Observable<any[]> {
    return this.http.put<any[]>(`${this.baseUrl}/carousel-slides`, { slides }, {
      headers: this.headers
    });
  }


}
