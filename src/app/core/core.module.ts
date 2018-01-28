import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppStore } from './app.store';
import { IsAuthenticatedGuard } from '../common/guards/is-authenticated.guard';

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppStore,
    IsAuthenticatedGuard
  ]
})
export class CoreModule { }
