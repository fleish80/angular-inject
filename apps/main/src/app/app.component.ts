import {Component, OnInit} from '@angular/core';
import {getWindow} from './utils/window.util';
import {RandomUserService} from './services/random-user.service';
import {Observable} from 'rxjs';
import {User} from './models/user.model';
import {CommonModule} from '@angular/common';
import {ButtonWrapperComponent} from './components/button-wrapper/button-wrapper.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'angular-inject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,

  imports: [
    CommonModule,
    ButtonWrapperComponent,
    HttpClientModule
  ],
  providers: [RandomUserService]
})
export class AppComponent implements OnInit {

  title = 'main';

  window = getWindow();

  user$: Observable<User>;

  buttonWrapperDisabled = false;
  buttonWrapperDisplay = true;

  constructor(private randomUserService: RandomUserService) {
    console.log(window);
  }

  ngOnInit(): void {
    this.user$ = this.randomUserService.getApi('https://randomuser.me/api/');
  }

}
