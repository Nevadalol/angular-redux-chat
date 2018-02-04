import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Unsubscribe } from 'redux';

import { authenticateSuccessful } from '../actions/authenticate-successful';
import { authenticateFailed } from '../actions/authenticate-failed';
import { AuthService } from '../auth.service';
import { AppStore } from '../../core/app.store';

@Component({
  selector: 'app-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginFailed', [
      state('true', style({border: '1px solid red'})),
      transition('false => true', [
        animate(200, keyframes([
          style({transform: 'translateX(-3px)', offset: 0}),
          style({transform: 'translateX(3px)', offset: 0.5}),
          style({transform: 'translateX(0)', offset: 1.0})
        ]))
      ]),
    ])
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  private storeSubscription: Unsubscribe;
  loginForm: FormGroup;
  hasError: boolean;

  constructor (
    private store: AppStore,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit () {
    this.loginForm = this.fb.group({username: ''});
    this.storeSubscription = this.store.subscribe(() => this.readState());

    this.readState();
  }

  ngOnDestroy () {
    this.storeSubscription();
  }

  readState () {
    this.hasError = this.store.getState().auth.hasError;
  }

  onLogin () {
    this.authService.authenticate(this.getUsername())
        .subscribe({
          next: (username) => this.onSuccessLogin(username),
          error: () => this.onErrorLogin()
        });
  }

  getUsername (): string {
    return this.loginForm.get('username').value.trim();
  }

  onSuccessLogin (username) {
    this.store.dispatch(authenticateSuccessful({
      id: 1,
      username
    }));

    this.router.navigate(['rooms']);
  }

  onErrorLogin () {
    this.store.dispatch(authenticateFailed());
  }
}
