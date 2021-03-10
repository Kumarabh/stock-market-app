import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceBrokingComponent } from './choice-broking.component';

describe('ChoiceBrokingComponent', () => {
  let component: ChoiceBrokingComponent;
  let fixture: ComponentFixture<ChoiceBrokingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceBrokingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceBrokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
