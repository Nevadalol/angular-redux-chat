import { InjectionToken, Provider } from '@angular/core';
import { createStore } from 'redux';

import { appReducer } from './app.reducer';
import { AppState } from './app.state';

export const AppStore = new InjectionToken('AppStore');

export const appStoreProvider: Provider = {
  provide: AppStore, useFactory: () => createStore<AppState>(appReducer)
};
