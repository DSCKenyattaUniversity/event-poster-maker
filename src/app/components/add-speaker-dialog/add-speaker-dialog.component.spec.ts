import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpeakerDialogComponent } from './add-speaker-dialog.component';

describe('AddSpeakerDialogComponent', () => {
  let component: AddSpeakerDialogComponent;
  let fixture: ComponentFixture<AddSpeakerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpeakerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpeakerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
