import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { LoginService } from './login.service';

import { FormControl } from '@angular/forms';

import { LabUser } from './lab-user';

@Component({
    template: `
        <div id="login">
            <img src="/assets/images/logo-lab.png" alt="labfacil logo">
            <div>
                <h1>Login</h1>
                <form>
                    <p>
                        <span class="input">
                            <input type="text" placeholder="Usuário">
                            <span></span>
                        </span>
                    </p>
                    <p>
                        <span class="input">
                            <input type="text" placeholder="Senha">
                            <span></span>
                        </span>
                    </p>
                    <p>
                        <button (click)="login()"  *ngIf="!authService.isLoggedIn">Entrar</button>
                    </p>
                </form>
            </div>
        </div>
    `,
    styleUrls: ['./login.component.scss' ]
})

export class LoginComponent implements OnInit {
  labUsers: LabUser[];
  name = new FormControl('');
  message: string;

  constructor(public authService: AuthService, public router: Router, private loginService: LoginService) {
    this.setMessage();
  }

  ngOnInit() {
      this.getLabUsers();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
        
      this.setMessage();
      console.log(this.authService.isLoggedIn);
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'dashboard';

        // Redirect the user
        this.router.navigate(['dashboard']);
      }
    });
  }

  getLabUsers() {
      this.loginService.getLabUser().subscribe(labUsers => this.labUsers = labUsers);
  }
 }
