import { Component, OnInit, OnDestroy } from '@angular/core';
import { Unsubscribe } from 'redux';

import { UserState } from './user.state';
import { AppStore } from '../../core/app.store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  private storeSubscription: Unsubscribe;
  users: UserState[];

  constructor (private store: AppStore) { }

  ngOnInit () {
    this.storeSubscription = this.store.subscribe(() => this._readStore());

    this._readStore();
  }

  ngOnDestroy () {
    this.storeSubscription();
  }

  private _readStore () {
    this.users = this.store.getState().chat.users;
  }
}
