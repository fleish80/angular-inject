import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RandomUserBeforeService } from '../../services/random-user-before.service';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'df-basic-inject',
  standalone: true,
  template: `
    <div *ngIf="joke$ | async as joke">
      {{joke.value}}
    </div>

    <div *ngIf="jokeBefore$ | async as jokeBefore">
      {{jokeBefore.value}}
    </div>
  `,
  imports: [
    JsonPipe,
    AsyncPipe,
    NgIf
  ],
  styles: [],
  providers: [RandomUserService, RandomUserBeforeService]
})
export class BasicInjectComponent {

  joke$ = inject(RandomUserService).getApi<{value: string}>('https://api.chucknorris.io/jokes/random');

  jokeBefore$ = inject(RandomUserBeforeService).getApi<{value: string}>('https://api.chucknorris.io/jokes/random');

}
