import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  template: `
    <div id="toolbar">
      <span>
        <img src="/assets/images/logo.png" alt="logo labfacil">
      </span>
      <span style="margin-right: 1%;" (click)="logout()" *ngIf="authService.isLoggedIn">
        <i class="fas fa-sign-out-alt"></i>Logout
      </span>
      <span><i class="far fa-comments"></i>Apoio, suporte</span>
      <span><i class="far fa-envelope"></i>Contato</span>
    </div>
  `,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.setMessage();
    this.router.navigate(['/login']);
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

}
