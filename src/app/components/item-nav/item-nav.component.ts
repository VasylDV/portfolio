import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-nav',
  templateUrl: './item-nav.component.html',
  styleUrls: ['./item-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
