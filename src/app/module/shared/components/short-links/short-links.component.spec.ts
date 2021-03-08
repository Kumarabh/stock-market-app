import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortLinksComponent } from './short-links.component';

describe('ShortLinksComponent', () => {
  let component: ShortLinksComponent;
  let fixture: ComponentFixture<ShortLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
