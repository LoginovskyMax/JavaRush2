import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickPipe } from './rick-pipe';

describe('RickPipe', () => {
  let component: RickPipe;
  let fixture: ComponentFixture<RickPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(RickPipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
