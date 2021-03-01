import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnandRathiComponent } from './anand-rathi.component';

describe('AnandRathiComponent', () => {
  let component: AnandRathiComponent;
  let fixture: ComponentFixture<AnandRathiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnandRathiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnandRathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
