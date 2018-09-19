import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UnidadesListComponent } from '../unidades/unidades-list.component';
import { DashPanelComponent } from './dash-panel/dash-panel.component';
import { DashPanelTabComponent } from './dash-panel/dash-panel-tab/dash-panel-tab.component';
import { UnidadesTabelaComponent } from '../unidades/unidades-tabela.component';

import { AuthGuard } from '../auth-guard.service';

const dashboardRoutes: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dash-panel',
        component: DashPanelComponent,
        children: [
          {
            path: '',
            component: DashPanelTabComponent,
            children: [
              {
                path: 'unidades-list',
                component: UnidadesListComponent,
                children: [
                  {
                    path: 'unidades-tabela',
                    component: UnidadesTabelaComponent
                  }
                ]
              },
            ]
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
