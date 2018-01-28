import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AppStore } from '../../core/app.store';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

  constructor (
    private store: AppStore,
    private router: Router
  ) { }

  private _isAuthenticated (): boolean {
    return this.store.getState().auth.isAuthenticated;
  }

  canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated: boolean = this._isAuthenticated();

    if (!isAuthenticated) {
      this.router.navigate(['login']);
    }

    return isAuthenticated;
  }
}
