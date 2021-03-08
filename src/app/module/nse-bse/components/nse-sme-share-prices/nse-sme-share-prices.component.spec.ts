import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NseSmeSharePricesComponent } from './nse-sme-share-prices.component';

describe('NseSmeSharePricesComponent', () => {
  let component: NseSmeSharePricesComponent;
  let fixture: ComponentFixture<NseSmeSharePricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NseSmeSharePricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NseSmeSharePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
