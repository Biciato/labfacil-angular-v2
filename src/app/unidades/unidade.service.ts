import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Unidade } from './unidade';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})

export class UnidadeService {
    unidades: Unidade[];

    constructor(private http: HttpClient) {

    }

    getUnidades (): Observable<Unidade[]> {
       return this.http.get<Unidade[]>('https://damp-savannah-46776.herokuapp.com/api/Unidades');
    }
}
