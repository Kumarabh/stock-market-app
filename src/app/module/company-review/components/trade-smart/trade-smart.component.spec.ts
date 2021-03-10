import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeSmartComponent } from './trade-smart.component';

describe('TradeSmartComponent', () => {
  let component: TradeSmartComponent;
  let fixture: ComponentFixture<TradeSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
