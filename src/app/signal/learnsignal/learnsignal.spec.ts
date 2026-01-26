import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Learnsignal } from './learnsignal';

describe('Learnsignal', () => {
  let component: Learnsignal;
  let fixture: ComponentFixture<Learnsignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Learnsignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Learnsignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
