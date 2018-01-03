import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { UserState } from './user.state';

@Injectable()
export class UsersService {

  constructor () { }

  fetchUsers (): Observable<UserState[]> {
    return Observable.of([{
      id: 1,
      username: 'Mishka'
    }, {
      id: 2,
      username: 'Pashka'
    }, {
      id: 3,
      username: 'DIMOOOOOOON'
    }]).delay(100);
  }
}
