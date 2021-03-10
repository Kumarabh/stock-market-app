import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBrokerViewComponent } from './compare-broker-view.component';

describe('CompareBrokerViewComponent', () => {
  let component: CompareBrokerViewComponent;
  let fixture: ComponentFixture<CompareBrokerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareBrokerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBrokerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
