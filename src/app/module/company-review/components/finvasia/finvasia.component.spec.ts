import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinvasiaComponent } from './finvasia.component';

describe('FinvasiaComponent', () => {
  let component: FinvasiaComponent;
  let fixture: ComponentFixture<FinvasiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinvasiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinvasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
