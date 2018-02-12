import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/observable/of';

import { UserState } from './user.state';

@Injectable()
export class UsersService implements Resolve<UserState[]> {

  constructor (private http: HttpClient) { }

  resolve (route: ActivatedRouteSnapshot): Observable<UserState[]> {
    return this.http.get<UserState[]>(`api/rooms/${route.params.id}/users`);
  }
}
