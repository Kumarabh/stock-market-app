import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliceBlueComponent } from './alice-blue.component';

describe('AliceBlueComponent', () => {
  let component: AliceBlueComponent;
  let fixture: ComponentFixture<AliceBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliceBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliceBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
