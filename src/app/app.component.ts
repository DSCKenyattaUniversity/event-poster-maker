import { CommonModule } from '@angular/common';
import {
  Compiler,
  Component,
  ComponentRef,
  NgModule,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import * as moment from 'moment';

import { Template } from './models/poster';
import Event from './models/event';
import { ImagingService } from './services/imaging.service';

enum Tabs {
  TEMPLATES = 1,
  EVENT_DETAILS = 2,
  STYLES = 3
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = {
    event: new Event('Title', moment(), 'Venue', []),
    loading: false,
    selected: Tabs.TEMPLATES
  };

  private componentRef: ComponentRef<any>;

  @ViewChild('preview', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private compiler: Compiler,
    private imagingService: ImagingService
  ) { }

  ngOnDestroy() {
    this.destroyContainerRef();
  }

  onTemplateChanged(template: Template) {
    this.destroyContainerRef();

    if (this.container) {
      this.container.clear();
    }

    this.model.loading = true;

    fetch(`/templates/${template.id}/poster.svg`)
      .then(response => response.text())
      .then(svg => {
        const previewComponent = Component({
          template: svg
        })(class {
          event: Event;

          constructor() { }
        });

        const previewComponentModule = NgModule({
          imports: [CommonModule],
          declarations: [previewComponent]
        })(class { });

        const module = this.compiler.compileModuleAndAllComponentsSync(previewComponentModule);

        const factory = module.componentFactories.find(componentFactory => componentFactory.componentType === previewComponent);
        const component = this.container.createComponent(factory);
        component.instance.event = this.model.event;

        this.componentRef = component;

        this.model.loading = false;
      });
  }

  downloadPoster() {
    const svg = this.container.element.nativeElement.parentElement.querySelector('svg');

    this.imagingService.domToImage(svg, 'poster.png');
  }

  private destroyContainerRef() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
