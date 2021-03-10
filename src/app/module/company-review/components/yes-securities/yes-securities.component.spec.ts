import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesSecuritiesComponent } from './yes-securities.component';

describe('YesSecuritiesComponent', () => {
  let component: YesSecuritiesComponent;
  let fixture: ComponentFixture<YesSecuritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesSecuritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesSecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
