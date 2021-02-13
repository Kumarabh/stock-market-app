import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBrokerComponent } from './compare-broker.component';

describe('CompareBrokerComponent', () => {
  let component: CompareBrokerComponent;
  let fixture: ComponentFixture<CompareBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
