import { Injectable } from '@angular/core';

import { of, Observable, throwError } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userFake: IUser = {
    username: 'username',
    email: 'email@login.com',
    password: '123456'
  };

  constructor() { }

  // fake login
  login(user: any): Observable<any> {
    let toSend = {
      isLoading: false,
      error: true,
      ...user
    };

    console.log(user.user)

    if (JSON.stringify(user.user) === JSON.stringify(this.userFake)) {
      toSend = {
        isLoading: false,
        error: false,
        user: user
      }
    } else {
      return throwError('Invalid username or password');
    }
    return of (toSend).pipe(delay(5000));
  }
}
