import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etnoeducacion } from './etnoeducacion';

describe('Etnoeducacion', () => {
  let component: Etnoeducacion;
  let fixture: ComponentFixture<Etnoeducacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etnoeducacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etnoeducacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
