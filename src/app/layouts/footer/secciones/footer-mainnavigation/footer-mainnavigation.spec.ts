import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainnavigation } from './footer-mainnavigation';

describe('FooterMainnavigation', () => {
  let component: FooterMainnavigation;
  let fixture: ComponentFixture<FooterMainnavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMainnavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMainnavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
