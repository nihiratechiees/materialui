import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecyclex } from './lifecyclex';

describe('Lifecyclex', () => {
  let component: Lifecyclex;
  let fixture: ComponentFixture<Lifecyclex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifecyclex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lifecyclex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
