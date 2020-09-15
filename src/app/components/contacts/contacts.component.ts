import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  readonly phoneNumber = '+38(067)501 68 83';
  readonly email = 'dvv03122014@gmail.com';

  constructor(public toggle: ToggleService) {}
}
