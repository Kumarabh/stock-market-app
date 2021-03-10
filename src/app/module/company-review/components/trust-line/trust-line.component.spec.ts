import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustLineComponent } from './trust-line.component';

describe('TrustLineComponent', () => {
  let component: TrustLineComponent;
  let fixture: ComponentFixture<TrustLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
