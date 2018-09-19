import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <app-toolbar></app-toolbar>
        <div class="container">
            <app-sidenav></app-sidenav>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: ['.container {height: calc(100% - 76.6563px); display: flex;}']
})

export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
