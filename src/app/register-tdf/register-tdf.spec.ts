import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTDF } from './register-tdf';

describe('RegisterTDF', () => {
  let component: RegisterTDF;
  let fixture: ComponentFixture<RegisterTDF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTDF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTDF);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
