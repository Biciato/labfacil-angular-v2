import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashPanelModule } from './dash-panel/dash-panel.module';
import { UnidadesModule } from '../unidades/unidades.module';

import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DashPanelModule,
        UnidadesModule
    ],
    declarations: [
        DashboardComponent,
        ToolbarComponent,
        SidenavComponent
    ],
    exports: [
        DashboardComponent,
        ToolbarComponent,
        SidenavComponent
    ]
})

export class DashboardModule {}
