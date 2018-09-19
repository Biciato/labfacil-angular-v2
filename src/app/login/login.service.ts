import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { LabUser } from './lab-user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
    labUser: LabUser;

    constructor(private http: HttpClient) { }

    getLabUser(): Observable<LabUser[]> {
       return this.http.get<LabUser[]>('https://damp-savannah-46776.herokuapp.com/api/LabUsers');
    }
}
