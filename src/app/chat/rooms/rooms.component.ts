import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { AppStore } from '../../app.store';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  username: string;

  constructor (@Inject(AppStore) private appStore) { }

  ngOnInit() {
    this.appStore.subscribe(() => this.readStore());

    this.readStore();
  }

  readStore () {
    this.username = this.appStore.getState().user.username;
  }
}
