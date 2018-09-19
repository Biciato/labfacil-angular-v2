import { Component, OnInit } from '@angular/core';

import { UnidadeService } from './unidade.service';

import { Unidade } from './unidade';

@Component({
    template: `
        <div id="row">
            <div class="dropdown">
                <span (click)="dropdownMenu()">Selecione Unidade <i class="fas fa-angle-down"></i></span>
                <ul [style.display]="isClicked ? 'block' : 'none'">
                    <li *ngFor="let unidade of unidades" class="dropdown-submenu">
                        <a>{{ unidade.razao_social }}</a>
                        <ul id="dropdownMenu">
                            <li *ngFor="let field of unidadeFields; let i = index" class="dropdown-submenu2">
                                <a>{{ field }}</a>
                                <div id="dropdownMenu2">
                                    <a>{{unidade | unidadesPipe: i}}</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <button routerLink="/dashboard/dash-panel/unidades-list/unidades-tabela" routerLinkActivate="active">
                Mostrar Tabela Unidades</button>
        </div>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./unidades-list.component.scss']
})

export class UnidadesListComponent implements OnInit {
    unidadeFields = ['CNPJ', 'I. E.', 'Razão Social', 'Nome Fantasia', 'Código Unidade', 'Nome Contato',
     'Email Contato', 'Telefone Contato', 'Telefone 2 Contato', 'Celular Contato'];
    unidades: Unidade[];
    isClicked = false;

    constructor(private unidadeService: UnidadeService) { }

    ngOnInit() {
        this.getUnidades();
    }

    getUnidades(): void {
        this.unidadeService.getUnidades()
        .subscribe(unidades => this.unidades = unidades);
    }

    dropdownMenu() {
        this.isClicked = !this.isClicked;
    }
}
