import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: IUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user).subscribe((response)=> {
      console.log(response);

    });
  }

}
