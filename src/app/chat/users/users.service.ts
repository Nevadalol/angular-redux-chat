import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/observable/of';

import { UserState } from './user.state';

@Injectable()
export class UsersService implements Resolve<UserState[]> {

  constructor (private http: HttpClient) { }

  resolve (): Observable<UserState[]> {
    return this.http.get<UserState[]>('api/rooms/1/users');
  }
}
