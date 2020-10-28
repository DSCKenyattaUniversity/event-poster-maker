import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Speaker from 'src/app/models/speaker';

@Component({
  selector: 'app-add-speaker-dialog',
  templateUrl: './add-speaker-dialog.component.html',
  styleUrls: ['./add-speaker-dialog.component.scss']
})
export class AddSpeakerDialogComponent implements OnInit {
  model: { speaker: Speaker } = {
    speaker: new Speaker(1, '', '', '')
  };

  @Input()
  title: string = "Add Speaker";
  
  @Output()
  onSave: EventEmitter<Speaker> = new EventEmitter<Speaker>(); 

  @Output()
  onCancel: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.onSave.emit(this.model.speaker);
  }

  close() {
    this.onCancel.emit();
  }
}
