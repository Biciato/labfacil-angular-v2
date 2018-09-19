import { Component } from '@angular/core';

@Component({
    selector: 'app-dash-panel',
    template: `
        <router-outlet></router-outlet>
    `,
    styles: [`
        :host {
            order: 2;
            width: 86%;
            height: 99%;
            margin-top: 1%;
            margin-left: 1%;
            background-color: #f5f5f5;
        }
    `]
})

export class DashPanelComponent {}
