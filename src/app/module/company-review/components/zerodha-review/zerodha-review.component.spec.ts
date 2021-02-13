import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZerodhaReviewComponent } from './zerodha-review.component';

describe('ZerodhaReviewComponent', () => {
  let component: ZerodhaReviewComponent;
  let fixture: ComponentFixture<ZerodhaReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerodhaReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerodhaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
