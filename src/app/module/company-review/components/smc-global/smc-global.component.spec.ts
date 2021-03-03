import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmcGlobalComponent } from './smc-global.component';

describe('SmcGlobalComponent', () => {
  let component: SmcGlobalComponent;
  let fixture: ComponentFixture<SmcGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmcGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmcGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
