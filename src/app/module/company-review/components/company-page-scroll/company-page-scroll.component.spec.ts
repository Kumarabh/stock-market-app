import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPageScrollComponent } from './company-page-scroll.component';

describe('CompanyPageScrollComponent', () => {
  let component: CompanyPageScrollComponent;
  let fixture: ComponentFixture<CompanyPageScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPageScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPageScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
