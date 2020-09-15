import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToggleService {

  show = true;
  private show$ = new BehaviorSubject(this.show);
  public showObs$ = this.show$.asObservable();

  public toggle(): void {
    this.show = !this.show;
    this.show$.next(this.show);
  }
}
