import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMarketHeaderComponent } from './stock-market-header.component';

describe('StockMarketHeaderComponent', () => {
  let component: StockMarketHeaderComponent;
  let fixture: ComponentFixture<StockMarketHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMarketHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMarketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
