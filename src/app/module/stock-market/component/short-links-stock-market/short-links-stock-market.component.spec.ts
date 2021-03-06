import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortLinksStockMarketComponent } from './short-links-stock-market.component';

describe('ShortLinksStockMarketComponent', () => {
  let component: ShortLinksStockMarketComponent;
  let fixture: ComponentFixture<ShortLinksStockMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortLinksStockMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortLinksStockMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
