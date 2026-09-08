import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickPage } from './rick-page';

describe('RickPage', () => {
  let component: RickPage;
  let fixture: ComponentFixture<RickPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RickPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
