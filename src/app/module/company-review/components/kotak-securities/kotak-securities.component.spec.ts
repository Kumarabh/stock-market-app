import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KotakSecuritiesComponent } from './kotak-securities.component';

describe('KotakSecuritiesComponent', () => {
  let component: KotakSecuritiesComponent;
  let fixture: ComponentFixture<KotakSecuritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KotakSecuritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KotakSecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
