import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoxkartComponent } from './stoxkart.component';

describe('StoxkartComponent', () => {
  let component: StoxkartComponent;
  let fixture: ComponentFixture<StoxkartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoxkartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoxkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
