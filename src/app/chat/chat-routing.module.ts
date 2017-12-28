import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsAuthenticatedGuard } from '../common/guards/is-authenticated.guard';



@NgModule({
  imports: [
    RouterModule.forChild()
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class ChatRoutingModule { }
