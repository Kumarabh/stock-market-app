import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTrustComponent } from './master-trust.component';

describe('MasterTrustComponent', () => {
  let component: MasterTrustComponent;
  let fixture: ComponentFixture<MasterTrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
