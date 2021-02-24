import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngelBrokingComponent } from './angel-broking.component';

describe('AngelBrokingComponent', () => {
  let component: AngelBrokingComponent;
  let fixture: ComponentFixture<AngelBrokingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngelBrokingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngelBrokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
