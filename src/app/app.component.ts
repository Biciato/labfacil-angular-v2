import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="content">
        <router-outlet></router-outlet>
    </div>
  `,
  styles: ['#content {width: 100%;height: 100%; overflow: hidden;}']
})
export class AppComponent {
}
