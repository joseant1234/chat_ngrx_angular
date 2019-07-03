import * as AuthActions from '../Actions/auth.action';
import { AuthActionTypes } from '../Actions/auth.action';

export interface State {
  user: Array<any>;
  tokens: Array<any>;
  error: string;
  isLoading: boolean;
}

const initialState: State = {
  user: [],
  tokens: [],
  error: '',
  isLoading: false
}

export function AuthReducer(state = [], action: AuthActions.actions) {
  switch(action.type) {
    case AuthActionTypes.LoginUser:
      return action;
    case AuthActionTypes.LoggedUser:
      return {
        ...state,
        isLoading: false,
        token: action.payload
      }
    default:
      return state;
  }
}

// Son los valores del momento, para state, action, error de la clase
export const getAuthState = (state: State) => state.user;
export const getAuthAction = (action: any) => action.payload;
export const getAuthError = (state: State) => state.error;
