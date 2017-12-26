import { Component, OnInit, Input } from '@angular/core';
import { RoomState } from '../room.state';

@Component({
  selector: '[appRoom]',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: RoomState;

  constructor() { }

  ngOnInit() {
  }

}
