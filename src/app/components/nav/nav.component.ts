import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { INavigation } from '../../interfaces';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit, OnDestroy {
  @Output() clicked = new EventEmitter();
  @HostBinding('class.show') get show() { return this.showMenu; }
  destroy$ = new Subject<void>();
  sub: Subscription = null;
  showMenu: boolean;

  public navList$: Observable<INavigation[]> = of([
    { id: 1, title: 'Home', router: 'main' },
    { id: 2, title: 'About me', router: 'about'},
    { id: 3, title: 'Portfolio', router: 'portfolio'},
    { id: 4, title: 'Contacts', router: 'contacts'}
  ]);

  constructor(public toggle: ToggleService) {}

  ngOnInit(): void {
    this.sub = this.toggle.showObs$.pipe(takeUntil(this.destroy$))
      .subscribe((show) => this.showMenu = !show);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.sub.unsubscribe();
  }

  toggleMenu(): void {
    this.clicked.emit();
  }
}
