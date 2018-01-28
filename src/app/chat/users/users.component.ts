import { Component, OnInit } from '@angular/core';

import { UserState } from './user.state';
import { AppStore } from '../../core/app.store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserState[];

  constructor (private store: AppStore) { }

  ngOnInit () {
    this.store.subscribe(() => this._readStore());

    this._readStore();
  }

  private _readStore () {
    this.users = this.store.getState().chat.users;
  }
}
