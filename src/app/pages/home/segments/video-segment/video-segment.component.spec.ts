import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSegmentComponent } from './video-segment.component';

describe('VideoSegmentComponent', () => {
  let component: VideoSegmentComponent;
  let fixture: ComponentFixture<VideoSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
