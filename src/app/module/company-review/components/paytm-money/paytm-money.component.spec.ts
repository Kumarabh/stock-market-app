import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytmMoneyComponent } from './paytm-money.component';

describe('PaytmMoneyComponent', () => {
  let component: PaytmMoneyComponent;
  let fixture: ComponentFixture<PaytmMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytmMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytmMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
