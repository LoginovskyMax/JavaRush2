import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBlock } from './error-block';

describe('ErrorBlock', () => {
  let component: ErrorBlock;
  let fixture: ComponentFixture<ErrorBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
