import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSegmentComponent } from './header-segment.component';

describe('HeaderSegmentComponent', () => {
  let component: HeaderSegmentComponent;
  let fixture: ComponentFixture<HeaderSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
