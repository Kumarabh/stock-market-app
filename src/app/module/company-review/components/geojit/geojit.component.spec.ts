import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeojitComponent } from './geojit.component';

describe('GeojitComponent', () => {
  let component: GeojitComponent;
  let fixture: ComponentFixture<GeojitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeojitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeojitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
