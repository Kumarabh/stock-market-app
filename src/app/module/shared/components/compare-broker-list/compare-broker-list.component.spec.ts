import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBrokerListComponent } from './compare-broker-list.component';

describe('CompareBrokerListComponent', () => {
  let component: CompareBrokerListComponent;
  let fixture: ComponentFixture<CompareBrokerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareBrokerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBrokerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
