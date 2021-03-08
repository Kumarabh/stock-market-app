import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCommodityBrokersComponent } from './top-commodity-brokers.component';

describe('TopCommodityBrokersComponent', () => {
  let component: TopCommodityBrokersComponent;
  let fixture: ComponentFixture<TopCommodityBrokersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCommodityBrokersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCommodityBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
