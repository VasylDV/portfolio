import { Directive, ElementRef, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';
import { skip } from 'rxjs/operators';

import { ToggleService } from '../services/toggle.service';
import { Unsubscribe } from '../shared/decorators';

@Unsubscribe()
@Directive({ selector: '[appHamburger]' })
export class HamburgerDirective implements OnDestroy {
  @Output() toggleNav = new EventEmitter<void>();

  constructor(private el: ElementRef, public toggle: ToggleService) {
   this.toggle.showObs$.pipe(skip(1))
      .subscribe(() => this.toggleClassName());
  }

  @HostListener('click') onClick() { this.clickHandler(); }

  private toggleClassName(): void {
    this.el.nativeElement.classList.toggle('hover');
  }

  private publishClick(): void {
    this.toggleNav.emit();
  }

  private clickHandler(): void {
    this.publishClick();
  }

  ngOnDestroy(): void {}
}
