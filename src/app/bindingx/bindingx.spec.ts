import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bindingx } from './bindingx';

describe('Bindingx', () => {
  let component: Bindingx;
  let fixture: ComponentFixture<Bindingx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bindingx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bindingx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
