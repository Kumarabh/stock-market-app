import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdfcSecuritiesComponent } from './hdfc-securities.component';

describe('HdfcSecuritiesComponent', () => {
  let component: HdfcSecuritiesComponent;
  let fixture: ComponentFixture<HdfcSecuritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdfcSecuritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdfcSecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
