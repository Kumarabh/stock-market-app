import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharekhanComponent } from './sharekhan.component';

describe('SharekhanComponent', () => {
  let component: SharekhanComponent;
  let fixture: ComponentFixture<SharekhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharekhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharekhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
