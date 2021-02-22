import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdelweissReviewComponent } from './edelweiss-review.component';

describe('EdelweissReviewComponent', () => {
  let component: EdelweissReviewComponent;
  let fixture: ComponentFixture<EdelweissReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdelweissReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdelweissReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
