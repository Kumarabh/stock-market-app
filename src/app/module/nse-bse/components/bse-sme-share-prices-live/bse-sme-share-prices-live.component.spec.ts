import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BseSmeSharePricesLiveComponent } from './bse-sme-share-prices-live.component';

describe('BseSmeSharePricesLiveComponent', () => {
  let component: BseSmeSharePricesLiveComponent;
  let fixture: ComponentFixture<BseSmeSharePricesLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BseSmeSharePricesLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BseSmeSharePricesLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
