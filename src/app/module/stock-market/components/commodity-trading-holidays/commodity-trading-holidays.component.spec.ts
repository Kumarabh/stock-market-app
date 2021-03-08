import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityTradingHolidaysComponent } from './commodity-trading-holidays.component';

describe('CommodityTradingHolidaysComponent', () => {
  let component: CommodityTradingHolidaysComponent;
  let fixture: ComponentFixture<CommodityTradingHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityTradingHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityTradingHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
