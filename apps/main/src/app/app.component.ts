import {Component, OnInit} from '@angular/core';
import {getWindow} from './utils/window.util';
import {RandomUserService} from './services/random-user.service';
import {Observable} from 'rxjs';
import {User} from './models/user.model';

@Component({
  selector: 'angular-inject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'main';

  window = getWindow();

  user$: Observable<User>;

  constructor(private randomUserService: RandomUserService) {
    console.log(window);
  }

  ngOnInit(): void {
    this.user$ = this.randomUserService.getApi('https://randomuser.me/api/');
  }

}
