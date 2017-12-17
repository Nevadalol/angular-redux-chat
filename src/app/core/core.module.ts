import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appStoreProvider } from '../app.store';

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    appStoreProvider
  ],
  declarations: []
})
export class CoreModule { }
