import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import {
  AuthActionTypes,
  LoggedIn,
  LoggedUser,
  LoginUser,
  LogoutAuth,
  LoginUserError,
} from '../actions/auth.action';
import { AuthService } from '../service/auth.service';

// Los effects son injectables
@Injectable({
  providedIn: 'root'
})

export class AuthEffects {

  constructor(private http: HttpClient, private actions$: Actions, private authService: AuthService) {}

  // ejecuta una accion sobre un pipe (que es un observable)
  // pipe permite ejecutar los operadores
  // tap pasa por la respueta de pipe
  @Effect()
  LoginUserError$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUserError>(AuthActionTypes.LoginUserError),
    tap(v => console.log('LoggedAPI error', v.payload)),
    map(data => {
      return { type: 'LOGIN_API_ERROR', payload: 'Email or password incorrect'};
    })
  );

  @Effect()
  LoginUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUser>(AuthActionTypes.LoginUser),
    tap(v => console.log('loginUser effect', v)),
    mergeMap(action =>
      this.authService.login({
        email: action.payload.user,
        username: '',
        password: action.payload.pass
      })
   )
  );

  @Effect()
  LoggedUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoggedUser>(AuthActionTypes.LoggedUser),
    tap(v => console.log('LoggedUser payload', v.payload)),
    map(data => {
      console.log(data)
      return { type: '', payload: data };
    })
  );


}
