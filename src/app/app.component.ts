import { Component } from '@angular/core';

import { ToggleService } from './services/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly title = 'portfolio';
  readonly img = 'assets/images/my_logo.svg';

  constructor(public toggle: ToggleService) {}

  toggleMenu(): void {
    this.toggle.toggle();
  }
}
