import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpstoxComponent } from './upstox.component';

describe('UpstoxComponent', () => {
  let component: UpstoxComponent;
  let fixture: ComponentFixture<UpstoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpstoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpstoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
