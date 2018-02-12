import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IsAuthenticatedGuard } from '../common/guards/is-authenticated.guard';
import { AppStore } from './app.store';

@NgModule({
  exports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppStore,
    IsAuthenticatedGuard
  ]
})
export class CoreModule { }
