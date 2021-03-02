import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbiSecuritiesComponent } from './sbi-securities.component';

describe('SbiSecuritiesComponent', () => {
  let component: SbiSecuritiesComponent;
  let fixture: ComponentFixture<SbiSecuritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbiSecuritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbiSecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
