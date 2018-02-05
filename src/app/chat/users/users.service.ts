import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/observable/of';

import { UserState } from './user.state';

@Injectable()
export class UsersService implements Resolve<UserState[]> {

  constructor () { }

  resolve (): Observable<UserState[]> {
    return Observable.of([{
      id: 2,
      username: 'Mishka'
    }]).delay(100);
  }
}
