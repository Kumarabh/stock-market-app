import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyersComponent } from './fyers.component';

describe('FyersComponent', () => {
  let component: FyersComponent;
  let fixture: ComponentFixture<FyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
