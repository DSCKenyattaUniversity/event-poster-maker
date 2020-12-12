import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  Compiler,
  Component,
  ComponentRef,
  NgModule,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import * as moment from 'moment';

import { Template } from './models/poster';
import Event from './models/event';
import { ImagingService } from './services/imaging.service';

enum Tabs {
  TEMPLATES = 1,
  EVENT_DETAILS = 2,
  STYLES = 3,
  PREVIEW = 0 /* Handset only */
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  model = {
    event: new Event('Title', moment(), 'Venue', []),
    loading: false,
    selected: Tabs.TEMPLATES,
    isHandset: false
  };

  private componentRef: ComponentRef<any>;

  @ViewChild('preview', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private compiler: Compiler,
    private imagingService: ImagingService
  ) {
    this.model.event.subtitle = 'Subtitle';
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .subscribe((state: BreakpointState) => {
        this.model.isHandset = state.matches;

        if (state.matches) {
          // Show preview
          this.model.selected = Tabs.PREVIEW
        }
      });
  }

  ngOnDestroy() {
    this.destroyContainerRef();
  }

  onTemplateChanged(template: Template) {
    this.destroyContainerRef();

    if (this.container) {
      this.container.clear();
    }

    this.model.loading = true;

    fetch(`templates/${template.id}/poster.svg`)
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
