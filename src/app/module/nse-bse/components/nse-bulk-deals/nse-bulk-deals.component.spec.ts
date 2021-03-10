import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NseBulkDealsComponent } from './nse-bulk-deals.component';

describe('NseBulkDealsComponent', () => {
  let component: NseBulkDealsComponent;
  let fixture: ComponentFixture<NseBulkDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NseBulkDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NseBulkDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
