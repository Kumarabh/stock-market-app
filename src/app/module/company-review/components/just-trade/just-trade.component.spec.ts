import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustTradeComponent } from './just-trade.component';

describe('JustTradeComponent', () => {
  let component: JustTradeComponent;
  let fixture: ComponentFixture<JustTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
