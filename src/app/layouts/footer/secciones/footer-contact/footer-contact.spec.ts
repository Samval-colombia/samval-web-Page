import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContact } from './footer-contact';

describe('FooterContact', () => {
  let component: FooterContact;
  let fixture: ComponentFixture<FooterContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
