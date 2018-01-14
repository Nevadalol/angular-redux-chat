import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  constructor () { }

  authenticate (username: string): Observable<string> {
    return username === 'Batman'
      ? Observable.of(username).delay(500)
      : Observable.throw('Wrong username.');
  }
}
