import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SasOnlineComponent } from './sas-online.component';

describe('SasOnlineComponent', () => {
  let component: SasOnlineComponent;
  let fixture: ComponentFixture<SasOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SasOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SasOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
