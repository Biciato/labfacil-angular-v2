import { Component, OnInit } from '@angular/core';

import { Unidade } from './unidade';

import { UnidadeService } from './unidade.service';

@Component({
    templateUrl: 'unidades-tabela.component.html',
    styleUrls: ['unidades-tabela.component.scss']
})

export class UnidadesTabelaComponent implements OnInit {
    unidades: Unidade[];
    unidadeFields = ['CNPJ', 'I. E.', 'Razão Social', 'Nome Fantasia', 'Código Unidade', 'Nome Contato',
     'Email Contato', 'Telefone Contato', 'Telefone 2 Contato', 'Celular Contato'];
    constructor(private unidadeService: UnidadeService) { }

    ngOnInit() {
        this.getUnidades();
    }

    getUnidades() {
        this.unidadeService.getUnidades()
            .subscribe(unidades => this.unidades = unidades);
    }
}
