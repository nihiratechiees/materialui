import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datatransfer } from './datatransfer';

describe('Datatransfer', () => {
  let component: Datatransfer;
  let fixture: ComponentFixture<Datatransfer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datatransfer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datatransfer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
