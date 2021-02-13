import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBrokerReviewsComponent } from './share-broker-reviews.component';

describe('ShareBrokerReviewsComponent', () => {
  let component: ShareBrokerReviewsComponent;
  let fixture: ComponentFixture<ShareBrokerReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareBrokerReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareBrokerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
