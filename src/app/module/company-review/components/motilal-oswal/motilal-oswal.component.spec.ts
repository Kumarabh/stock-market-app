import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotilalOswalComponent } from './motilal-oswal.component';

describe('MotilalOswalComponent', () => {
  let component: MotilalOswalComponent;
  let fixture: ComponentFixture<MotilalOswalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotilalOswalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotilalOswalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
