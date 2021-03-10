import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiraSecuritiesComponent } from './indira-securities.component';

describe('IndiraSecuritiesComponent', () => {
  let component: IndiraSecuritiesComponent;
  let fixture: ComponentFixture<IndiraSecuritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiraSecuritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiraSecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
