import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AppStore } from '../../core/app.store';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

  constructor (
    @Inject(AppStore) private appStore,
    private router: Router
  ) { }

  private _isAuthenticated (): boolean {
    return this.appStore.getState().auth.isAuthenticated;
  }

  canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated: boolean = this._isAuthenticated();

    if (!isAuthenticated) {
      this.router.navigate(['login']);
    }

    return isAuthenticated;
  }
}
