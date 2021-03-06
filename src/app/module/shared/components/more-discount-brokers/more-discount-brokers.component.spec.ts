import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDiscountBrokersComponent } from './more-discount-brokers.component';

describe('MoreDiscountBrokersComponent', () => {
  let component: MoreDiscountBrokersComponent;
  let fixture: ComponentFixture<MoreDiscountBrokersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDiscountBrokersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDiscountBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
