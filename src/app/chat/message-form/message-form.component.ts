import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { addMessage } from '../chat.actions';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {
  message: FormControl = new FormControl();

  constructor (
    @Inject(AppStore) private store
  ) { }

  ngOnInit () {
  }

  sendMessage (event: KeyboardEvent) {
    event.preventDefault();

    if (this.message.value.length) {
      this.store.dispatch(addMessage({
        authorId: 3,
        roomId: 1,
        content: this.message.value
      }));

      this.message.setValue('');
    }
  }
}
