import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchiiversComponent } from './achiivers.component';

describe('AchiiversComponent', () => {
  let component: AchiiversComponent;
  let fixture: ComponentFixture<AchiiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchiiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchiiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
