import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingHolidaysTwentyOneComponent } from './trading-holidays-twenty-one.component';

describe('TradingHolidaysTwentyOneComponent', () => {
  let component: TradingHolidaysTwentyOneComponent;
  let fixture: ComponentFixture<TradingHolidaysTwentyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingHolidaysTwentyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingHolidaysTwentyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
