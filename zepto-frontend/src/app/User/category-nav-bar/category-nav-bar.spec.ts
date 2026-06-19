import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNavBar } from './category-nav-bar';

describe('CategoryNavBar', () => {
  let component: CategoryNavBar;
  let fixture: ComponentFixture<CategoryNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryNavBar],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
