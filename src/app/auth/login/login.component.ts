import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { AuthService } from '../service/auth.service';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../../reducers/reducers';
import * as Auth from '../actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: IUser;
  // error$ = this.store.select(state => state.auth.error);
  // isLoading$ = this.store.select(state => state.auth.isLoading);
  error$ = this.store.select(state => fromAuth.getAuthError);
  isLoading$ = this.store.select(state => fromAuth.getAuthLoading);

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
    this.user = {
      username: 'username',
      email: 'email@login.com',
      password: '123456'
    }
  }

  login() {
    // this.loginProcess = true;

    // this.authService.login(this.user).subscribe((response)=> {
    //   console.log(response);
    //   this.loginProcess = false;
    //   this.error = !response;

    // }, (err) => {
    //   console.log('err', err);
    //   this.loginProcess = false;
    // });
    this.store.dispatch(new Auth.LoginUser({user: this.user}));
  }

}
