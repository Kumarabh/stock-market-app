import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IiflSecuritiesComponent } from './iifl-securities.component';

describe('IiflSecuritiesComponent', () => {
  let component: IiflSecuritiesComponent;
  let fixture: ComponentFixture<IiflSecuritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IiflSecuritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IiflSecuritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
