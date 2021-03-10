import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeJiniComponent } from './trade-jini.component';

describe('TradeJiniComponent', () => {
  let component: TradeJiniComponent;
  let fixture: ComponentFixture<TradeJiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeJiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeJiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
