import { Component, OnInit, Inject } from '@angular/core';
import { AppStore } from '../../app.store';

import { MessagesService } from './messages.service';
import { messagesFetched } from '../chat.actions';
import { MessageState } from './message.state';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: MessageState[];

  constructor (
    @Inject(AppStore) private store,
    private messagesService: MessagesService,
  ) { }

  ngOnInit () {
    this.store.subscribe(() => this._readStore());

    this.messagesService.fetchMessages().subscribe(
      messages => this.store.dispatch(messagesFetched(messages))
    );
  }

  private _readStore () {
    this.messages = this.store.getState().chat.messages;
  }
}
