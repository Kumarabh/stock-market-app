import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeelineComponent } from './beeline.component';

describe('BeelineComponent', () => {
  let component: BeelineComponent;
  let fixture: ComponentFixture<BeelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
