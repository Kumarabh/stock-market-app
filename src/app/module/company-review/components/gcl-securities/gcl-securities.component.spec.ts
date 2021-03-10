import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GclSecuritiesComponent } from './gcl-securities.component';

describe('GclSecuritiesComponent', () => {
  let component: GclSecuritiesComponent;
  let fixture: ComponentFixture<GclSecuritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GclSecuritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GclSecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
