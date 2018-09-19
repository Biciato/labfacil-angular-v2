import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UnidadesComponent } from './unidades.component';
import { UnidadesListComponent } from './unidades-list.component';
import { UnidadesTabelaComponent } from './unidades-tabela.component';

import { UnidadesPipe } from './unidades.pipe';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule
    ],
    declarations: [
        UnidadesComponent,
        UnidadesListComponent,
        UnidadesTabelaComponent,
        UnidadesPipe
    ],
    providers: [],
    exports: [
        UnidadesComponent,
        UnidadesListComponent
    ]
})

export class UnidadesModule {}
