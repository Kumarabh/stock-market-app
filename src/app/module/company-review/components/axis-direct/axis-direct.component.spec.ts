import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisDirectComponent } from './axis-direct.component';

describe('AxisDirectComponent', () => {
  let component: AxisDirectComponent;
  let fixture: ComponentFixture<AxisDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxisDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
