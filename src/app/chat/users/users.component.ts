import { Component, OnInit, Inject } from '@angular/core';

import { UsersService } from './users.service';
import { usersFetched } from '../chat.actions';
import { UserState } from './user.state';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserState[];

  constructor (
    @Inject(AppStore) private store,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.store.subscribe(() => this._readStore());

    this.usersService.fetchUsers().subscribe(
      users => this.store.dispatch(usersFetched(users))
    );
  }

  private _readStore () {
    this.users = this.store.getState().chat.users;
  }
}
