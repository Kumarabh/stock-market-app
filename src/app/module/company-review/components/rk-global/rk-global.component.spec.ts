import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkGlobalComponent } from './rk-global.component';

describe('RkGlobalComponent', () => {
  let component: RkGlobalComponent;
  let fixture: ComponentFixture<RkGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
