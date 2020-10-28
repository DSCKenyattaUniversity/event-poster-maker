import { BrowserModule } from '@angular/platform-browser';
import { Compiler, CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  PosterTemplatesComponent, 
  PosterTemplatesItemComponent,
  EventDetailsComponent
} from './components';
import { FormsModule } from '@angular/forms';
import { AddSpeakerDialogComponent } from './components/add-speaker-dialog/add-speaker-dialog.component';
import { ImagePickerComponent } from './components/image-picker/image-picker.component';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler()
}

@NgModule({
  declarations: [
    AppComponent,
    PosterTemplatesComponent,
    PosterTemplatesItemComponent,
    EventDetailsComponent,
    AddSpeakerDialogComponent,
    ImagePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: { useJit: true }, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [ COMPILER_OPTIONS ]},
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
