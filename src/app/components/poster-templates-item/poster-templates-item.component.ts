import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Template } from '../../models/poster';

@Component({
  selector: 'app-poster-templates-item',
  templateUrl: './poster-templates-item.component.html',
  styleUrls: ['./poster-templates-item.component.scss']
})
export class PosterTemplatesItemComponent implements OnInit {
  @Input() template: Template;
  @Input() selected: boolean;

  @Output()
  click: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.click.emit();
  }
}
