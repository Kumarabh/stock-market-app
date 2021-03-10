import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdityaBirlaMoneyComponent } from './aditya-birla-money.component';

describe('AdityaBirlaMoneyComponent', () => {
  let component: AdityaBirlaMoneyComponent;
  let fixture: ComponentFixture<AdityaBirlaMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdityaBirlaMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdityaBirlaMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
