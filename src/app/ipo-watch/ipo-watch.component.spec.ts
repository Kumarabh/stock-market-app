import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoWatchComponent } from './ipo-watch.component';

describe('IpoWatchComponent', () => {
  let component: IpoWatchComponent;
  let fixture: ComponentFixture<IpoWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
