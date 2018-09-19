import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

export interface Sector {
    name: string;
    active: boolean;
    state: string;
}

@Component({
    selector: 'app-dash-panel-tab',
    template: `
        <div id="dashPanelTab">
            <div id="dashPanelSectors">
                <a *ngFor="let sector of sectors"
                [class.active]="sector.active"
                [@tabState]="sector.state"
                (click)="setActive(sector)"
                routerLink="/dashboard/dash-panel/unidades-list" routerLinkActivate="active">
                {{ sector.name }}</a>
            </div>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./dash-panel-tab.component.scss'],
    animations: [
        trigger('tabState', [
        state('inactive', style({
            flexGrow: 1,
            textAlign: 'center',
            paddingTop: '1%',
            color: 'antiquewhite',
            border: '8px solid #0780c6',
            borderRadius: 10,
            transform: 'scale(1)'
        })),
        state('active', style({
            backgroundColor: 'darkorange',
            border: '8px solid #0780c6',
            borderRadius: '15px',
            fontSize: '110%',
            transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})

export class DashPanelTabComponent implements OnInit {
    sectors: Array<Sector>;

    constructor() {
        this.sectors = [
            { name: 'Unidades', active: true, state: 'active'},
            { name: 'Postos de Coleta', active: false, state: 'inactive'},
            { name: 'Faturamento', active: false, state: 'inactive'},
            { name: 'Usuários', active: false, state: 'inactive'},
            { name: 'Horários', active: false, state: 'inactive'},
            { name: 'Documentos', active: false, state: 'inactive'},
        ];
    }

    ngOnInit() {

    }

    setActive(sector: Sector): void {
        this.sectors.forEach(function(t) {
            t.active = false;
            t.state = 'inactive';
        });
        sector.active = true;
        this.toggleState(sector);
    }

    toggleState(sector) {
        sector.state = sector.state === 'active' ? 'inactive' : 'active';
    }

}
