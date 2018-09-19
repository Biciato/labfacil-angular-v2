import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UnidadesModule } from '../../unidades/unidades.module';
import { RouterModule } from '@angular/router';

import { DashPanelComponent } from './dash-panel.component';
import { DashPanelTabComponent } from './dash-panel-tab/dash-panel-tab.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        UnidadesModule,
        RouterModule
    ],
    declarations: [
        DashPanelComponent,
        DashPanelTabComponent
    ],
    exports: [
        DashPanelComponent
    ]
})

export class DashPanelModule {}
