import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowwComponent } from './groww.component';

describe('GrowwComponent', () => {
  let component: GrowwComponent;
  let fixture: ComponentFixture<GrowwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
