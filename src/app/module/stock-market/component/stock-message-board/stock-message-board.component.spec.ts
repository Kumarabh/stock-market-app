import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMessageBoardComponent } from './stock-message-board.component';

describe('StockMessageBoardComponent', () => {
  let component: StockMessageBoardComponent;
  let fixture: ComponentFixture<StockMessageBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMessageBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMessageBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
