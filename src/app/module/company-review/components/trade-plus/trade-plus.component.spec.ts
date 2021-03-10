import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradePlusComponent } from './trade-plus.component';

describe('TradePlusComponent', () => {
  let component: TradePlusComponent;
  let fixture: ComponentFixture<TradePlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradePlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
