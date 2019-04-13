import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclesSegmentComponent } from './circles-segment.component';

describe('CirclesSegmentComponent', () => {
  let component: CirclesSegmentComponent;
  let fixture: ComponentFixture<CirclesSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclesSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclesSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
