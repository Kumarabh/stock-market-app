import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhaniStocksComponent } from './dhani-stocks.component';

describe('DhaniStocksComponent', () => {
  let component: DhaniStocksComponent;
  let fixture: ComponentFixture<DhaniStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhaniStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhaniStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
