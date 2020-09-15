import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  public readonly image = './assets/images/me.jpg';
  constructor(public toggle: ToggleService) {}
}
