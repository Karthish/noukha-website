import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepgAnimationComponent } from './homepg-animation.component';

describe('HomepgAnimationComponent', () => {
  let component: HomepgAnimationComponent;
  let fixture: ComponentFixture<HomepgAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepgAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepgAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
