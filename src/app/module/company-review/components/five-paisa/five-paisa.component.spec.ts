import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivePaisaComponent } from './five-paisa.component';

describe('FivePaisaComponent', () => {
  let component: FivePaisaComponent;
  let fixture: ComponentFixture<FivePaisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivePaisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivePaisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
