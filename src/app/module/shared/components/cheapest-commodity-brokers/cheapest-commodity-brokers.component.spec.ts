import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheapestCommodityBrokersComponent } from './cheapest-commodity-brokers.component';

describe('CheapestCommodityBrokersComponent', () => {
  let component: CheapestCommodityBrokersComponent;
  let fixture: ComponentFixture<CheapestCommodityBrokersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheapestCommodityBrokersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheapestCommodityBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
