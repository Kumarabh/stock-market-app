import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBrokerStockMarketComponent } from './compare-broker-stock-market.component';

describe('CompareBrokerStockMarketComponent', () => {
  let component: CompareBrokerStockMarketComponent;
  let fixture: ComponentFixture<CompareBrokerStockMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareBrokerStockMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBrokerStockMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
