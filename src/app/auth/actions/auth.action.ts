import { Action } from '@ngrx/store';
import { IUser } from '../../interfaces/IUser';

export enum AuthActionTypes {
  // por convención se pone el nombre del modulo [Auth] para conocer que modulo se esta utilizando
  LoggedUser = '[Auth] LOGED_USER',
  LoginUser = '[Auth] LOGIN_USER',
  LoginUserError = '[Auth] LOGIN_USER_ERROR',
  LoggedIn = '[Auth] LOGGED_IN',
  LogoutAuth = '[Auth] LOGOUT_USER'
}


export class LoggedIn implements Action {
  readonly type = AuthActionTypes.LoggedIn;
  constructor(public payload: { isLogin: boolean}) {}
}

export class LogoutAuth implements Action {
  readonly type = AuthActionTypes.LogoutAuth;
  constructor(public payload: { isLogout: boolean}) {}
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.LoginUser;
  constructor(public payload: { user: IUser}) {}
}

export class LoggedUser implements Action {
  readonly type = AuthActionTypes.LoggedUser;
  constructor(public payload: any) {}
}

export class LoginUserError implements Action {
  readonly type = AuthActionTypes.LoginUserError;
  constructor(public payload: { isLoading: boolean, error: boolean, user: IUser}) {}
}

export type actions =
  LoggedIn
  | LogoutAuth
  | LoginUser
  | LoggedUser
  | LoginUserError
