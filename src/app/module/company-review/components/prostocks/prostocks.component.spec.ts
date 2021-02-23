import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProstocksComponent } from './prostocks.component';

describe('ProstocksComponent', () => {
  let component: ProstocksComponent;
  let fixture: ComponentFixture<ProstocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProstocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
