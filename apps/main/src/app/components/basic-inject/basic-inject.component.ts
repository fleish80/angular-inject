import {Component, inject} from '@angular/core';
import {RandomUserService} from '../../services/random-user.service';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'angular-inject-basic-inject',
  standalone: true,
  template: `
    <pre>{{user$ | async | json}}</pre>
  `,
  imports: [
    JsonPipe,
    AsyncPipe
  ],
  styles: []
})
export class BasicInjectComponent {

  user$ = inject(RandomUserService).getApi('https://randomuser.me/api/');

}
