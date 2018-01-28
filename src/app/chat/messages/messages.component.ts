import { Component, OnInit } from '@angular/core';

import { MessageState } from './message.state';
import { AppStore } from '../../core/app.store';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: MessageState[];

  constructor (private store: AppStore) { }

  ngOnInit () {
    this.store.subscribe(() => this._readStore());

    this._readStore();
  }

  getAuthorUsername (id): string {
    return this.store.getState().chat.users.find(user => user.id === id).username;
  }

  private _readStore () {
    this.messages = this.store.getState().chat.messages;
  }
}
