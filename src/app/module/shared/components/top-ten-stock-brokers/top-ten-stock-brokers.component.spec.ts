import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenStockBrokersComponent } from './top-ten-stock-brokers.component';

describe('TopTenStockBrokersComponent', () => {
  let component: TopTenStockBrokersComponent;
  let fixture: ComponentFixture<TopTenStockBrokersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenStockBrokersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenStockBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
