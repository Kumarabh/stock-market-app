import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NseCircuitFilterComponent } from './nse-circuit-filter.component';

describe('NseCircuitFilterComponent', () => {
  let component: NseCircuitFilterComponent;
  let fixture: ComponentFixture<NseCircuitFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NseCircuitFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NseCircuitFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
