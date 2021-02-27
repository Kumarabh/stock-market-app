import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IciciDirectComponent } from './icici-direct.component';

describe('IciciDirectComponent', () => {
  let component: IciciDirectComponent;
  let fixture: ComponentFixture<IciciDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IciciDirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IciciDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
