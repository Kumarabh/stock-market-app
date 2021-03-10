import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingBellsComponent } from './trading-bells.component';

describe('TradingBellsComponent', () => {
  let component: TradingBellsComponent;
  let fixture: ComponentFixture<TradingBellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingBellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingBellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
