import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nombres } from './nombres';

describe('Nombres', () => {
  let component: Nombres;
  let fixture: ComponentFixture<Nombres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nombres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nombres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
