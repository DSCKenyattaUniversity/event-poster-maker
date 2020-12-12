import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { LayoutModule } from '@angular/cdk/layout';
import { Compiler, CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import { ImagePickerModule } from '@wycliffewasonga/image-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AddSpeakerDialogComponent,
  EventDetailsComponent,
  PosterTemplatesComponent, 
  PosterTemplatesItemComponent
} from './components';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler()
}

@NgModule({
  declarations: [
    AppComponent,
    PosterTemplatesComponent,
    PosterTemplatesItemComponent,
    EventDetailsComponent,
    AddSpeakerDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    ImagePickerModule
  ],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: { useJit: true }, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [ COMPILER_OPTIONS ]},
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
