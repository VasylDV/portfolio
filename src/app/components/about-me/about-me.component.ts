import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {
  constructor(public toggle: ToggleService) {}
}
