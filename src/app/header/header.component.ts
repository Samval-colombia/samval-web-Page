import { Component, HostListener, Input, OnInit, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { MonitorIcon } from '@ngverse/icons-lu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MonitorIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() links: Array<{ label: string; path: string; exact?: boolean }> = [];
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  protected trackByPath = (_: number, item: { path: string }) => item.path;

  ngOnInit(): void {
    if (this.isBrowser) {
      this.updateScrollState();
    }
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    if (!this.isBrowser) return;
    this.updateScrollState();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  private updateScrollState(): void {
    if (!this.isBrowser) return;
    this.scrolled.set(window.scrollY > 8);
  }
}
