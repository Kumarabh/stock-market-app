import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTradingHolidaysComponent } from './stock-trading-holidays.component';

describe('StockTradingHolidaysComponent', () => {
  let component: StockTradingHolidaysComponent;
  let fixture: ComponentFixture<StockTradingHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTradingHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTradingHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
