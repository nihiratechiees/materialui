import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTDF } from './login-tdf';

describe('LoginTDF', () => {
  let component: LoginTDF;
  let fixture: ComponentFixture<LoginTDF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTDF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTDF);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
