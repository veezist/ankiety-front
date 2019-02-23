import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySavedDialogComponent } from './survey-saved-dialog.component';

describe('SurveySavedDialogComponent', () => {
  let component: SurveySavedDialogComponent;
  let fixture: ComponentFixture<SurveySavedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySavedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySavedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
