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
    @Inject(AppStore) private appStore,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.appStore.subscribe(() => this.readStore());

    this.usersService.fetchUsers().subscribe((users) => this.appStore.dispatch(usersFetched(users)));
  }

  readStore () {
    this.users = this.appStore.getState().chat.users;
  }
}
