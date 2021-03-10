import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenturaComponent } from './ventura.component';

describe('VenturaComponent', () => {
  let component: VenturaComponent;
  let fixture: ComponentFixture<VenturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
