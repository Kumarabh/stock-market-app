import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdbiCapitalsComponent } from './idbi-capitals.component';

describe('IdbiCapitalsComponent', () => {
  let component: IdbiCapitalsComponent;
  let fixture: ComponentFixture<IdbiCapitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdbiCapitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdbiCapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
