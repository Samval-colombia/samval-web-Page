import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNewsletters } from './footer-newsletters';

describe('FooterNewsletters', () => {
  let component: FooterNewsletters;
  let fixture: ComponentFixture<FooterNewsletters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNewsletters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNewsletters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
