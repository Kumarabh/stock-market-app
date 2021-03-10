import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaBullsComponent } from './india-bulls.component';

describe('IndiaBullsComponent', () => {
  let component: IndiaBullsComponent;
  let fixture: ComponentFixture<IndiaBullsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaBullsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaBullsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
