import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appmenu } from './appmenu';

describe('Appmenu', () => {
  let component: Appmenu;
  let fixture: ComponentFixture<Appmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
