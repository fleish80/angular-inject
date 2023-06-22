import { AsyncPipe, NgIf } from '@angular/common';
import {
  Component,
  EnvironmentInjector,
  Injector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { Observable } from 'rxjs';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'df-run-in-context',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  template: `
    <button (click)="loadJoke()">Load Joke</button>
    <div *ngIf="joke$ | async as joke">
      {{ joke.value }}
    </div>
  `,
  styles: [],
  providers: [RandomUserService]
})
export class RunInContextComponent {
  #injector = inject(Injector);
  joke$: Observable<{ value: string }>;

  constructor(private environmentInjector: EnvironmentInjector) {}

  loadJoke() {
    // before
    // this.environmentInjector.runInContext(() => {
    //   console.log(getWindow());
    // });
    runInInjectionContext(this.#injector, () => {
      this.joke$ = inject(RandomUserService).getApi<{ value: string }>(
        'https://api.chucknorris.io/jokes/random'
      );
    });
  }
}
