import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Orientation, Template } from '../../models/poster';
import { PosterTemplatesService } from '../../services/poster-templates.service';

@Component({
  selector: 'app-poster-templates',
  templateUrl: './poster-templates.component.html',
  styleUrls: ['./poster-templates.component.scss']
})
export class PosterTemplatesComponent implements OnInit {
  private _templates: Template[];

  orientation: Orientation;
  selected: Template;

  @Output()
  onSelectionChange: EventEmitter<Template> = new EventEmitter<Template>();

  constructor(private posterTemplateService: PosterTemplatesService) {
    this._templates = [];
  }

  ngOnInit(): void {
    this.orientation = Orientation.PORTRAIT;

    this.posterTemplateService.allTemplates().subscribe(templates => {
      this._templates = templates;
      this.changeSelection(this.templates[0]);
    });
  }

  get templates(): Template[] {
    return this._templates.filter(({orientation}) => orientation == this.orientation);
  }

  changeSelection(template: Template) {
    if (this.selected == template) {
      return;
    }

    this.selected = template;
    this.onSelectionChange.emit(template);
  }
}
