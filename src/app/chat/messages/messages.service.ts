import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/observable/of';

import { MessageState } from './message.state';

@Injectable()
export class MessagesService implements Resolve<MessageState[]> {

  constructor (private http: HttpClient) {}

  resolve (): Observable<MessageState[]> {
    return this.http.get<MessageState[]>('api/rooms/1/messages');
  }
}
