import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import * as moment from 'moment';
import Speaker from 'src/app/models/speaker';

import Event from '../../models/event';
import { AddSpeakerDialogComponent } from '../add-speaker-dialog/add-speaker-dialog.component';
import { Chance } from 'chance';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  @Input("event") model: Event = new Event('Event Title', moment(), '', []);

  @ViewChild('dialog', { read: ViewContainerRef })
  container: ViewContainerRef;

  // TODO: Let the DI provide this
  private chance: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.chance = Chance();
  }

  ngOnInit(): void {
  }

  onDateChange(event) {
    this.model.date = moment(String(event.target.value));
  }

  onStartTimeChange(event) {
    this.model.startTime = moment(String(event.target.value), 'HH:mm');
  }

  onEndTimeChange(event) {
    this.model.endTime = moment(String(event.target.value), 'HH:mm');
  }

  addSpeaker() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(AddSpeakerDialogComponent);
    this.container.clear();
    
    const component = this.container.createComponent(factory);

    const speaker = new Speaker(this.chance.guid(), '', '', '');
    component.instance.model.speaker = speaker;
    component.instance.onSave.subscribe(evt => {
      this.model.speakers.push(speaker);
      
      this.container.clear();
    });
    component.instance.onCancel.subscribe(evt => {
      this.container.clear();
    });
  }

  deleteSpeaker(speaker: Speaker) {
    this.model.speakers = this.model.speakers.filter(it => it.id !== speaker.id);
  }

  editSpeaker(speaker: Speaker) {
    const index = this.model.speakers.findIndex(it => it.id === speaker.id);

    const factory = this.componentFactoryResolver.resolveComponentFactory(AddSpeakerDialogComponent);
    this.container.clear();
    
    const component = this.container.createComponent(factory).instance;

    const s: Speaker =  { ...speaker };
    
    component.title = "Edit Speaker";
    component.model.speaker = s;
    component.onSave.subscribe(evt => {
      this.model.speakers[index] = s;
      
      this.container.clear();
    });
    component.onCancel.subscribe(evt => {
      this.container.clear();
    });
  }
}
