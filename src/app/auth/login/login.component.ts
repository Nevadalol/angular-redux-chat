import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { authFailed, authSuccessful } from '../auth.actions';
import { setAppUser } from '../../core/app-user/app-user.actions';
import { AuthService } from '../auth.service';
import { AppStore } from '../../app.store';

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
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasError: boolean;

  constructor (
    @Inject(AppStore) private appStore,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit () {
    this.loginForm = this.fb.group({username: ''});
    this.appStore.subscribe(() => this.readState());

    this.readState();
  }

  readState () {
    this.hasError = this.appStore.getState().auth.hasError;
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
    this.appStore.dispatch(authSuccessful());
    this.appStore.dispatch(setAppUser({
      id: 3,
      username
    }));

    this.router.navigate(['rooms']);
  }

  onErrorLogin () {
    this.appStore.dispatch(authFailed());
  }
}
