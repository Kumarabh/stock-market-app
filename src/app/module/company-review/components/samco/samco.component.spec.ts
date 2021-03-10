import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamcoComponent } from './samco.component';

describe('SamcoComponent', () => {
  let component: SamcoComponent;
  let fixture: ComponentFixture<SamcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
