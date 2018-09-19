import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

import { LoginService } from './login.service';

import { AuthService } from '../auth.service';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    exports: [
        LoginComponent
    ],
    declarations: [LoginComponent],
    providers: [
        LoginService,
        AuthService
    ],
})
export class LoginModule { }
