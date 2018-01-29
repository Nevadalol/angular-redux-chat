import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { addMessage } from '../actions/message-add';
import { AppStore } from '../../core/app.store';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  message: FormControl = new FormControl();

  constructor (private store: AppStore) { }

  sendMessage (event: KeyboardEvent) {
    event.preventDefault();

    if (this.message.value.length) {
      this.store.dispatch(addMessage({
        authorId: this.store.getState().auth.user.id,
        roomId: 1,
        content: this.message.value
      }));

      this.message.setValue('');
    }
  }
}
