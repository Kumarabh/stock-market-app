import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomCapitalComponent } from './wisdom-capital.component';

describe('WisdomCapitalComponent', () => {
  let component: WisdomCapitalComponent;
  let fixture: ComponentFixture<WisdomCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WisdomCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WisdomCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
