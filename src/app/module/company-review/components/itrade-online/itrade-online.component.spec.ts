import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItradeOnlineComponent } from './itrade-online.component';

describe('ItradeOnlineComponent', () => {
  let component: ItradeOnlineComponent;
  let fixture: ComponentFixture<ItradeOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItradeOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItradeOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
