import { InjectionToken, Provider } from '@angular/core';
import { createStore } from 'redux';

import { appReducer, AppState } from './app.reducer';

export const AppStore = new InjectionToken('AppStore');

export const appStoreProvider: Provider = {
  provide: AppStore, useFactory: () => createStore<AppState>(appReducer)
};
