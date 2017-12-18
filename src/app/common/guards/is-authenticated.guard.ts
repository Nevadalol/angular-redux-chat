import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AppStore } from '../../app.store';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

  constructor (@Inject(AppStore) private appStore) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.appStore.getState().login.isAuthenticated;
  }
}
