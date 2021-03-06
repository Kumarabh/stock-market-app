import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreServiceBrokersComponent } from './more-service-brokers.component';

describe('MoreServiceBrokersComponent', () => {
  let component: MoreServiceBrokersComponent;
  let fixture: ComponentFixture<MoreServiceBrokersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreServiceBrokersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreServiceBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
