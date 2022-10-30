import {Component, OnInit} from '@angular/core';
import {getWindow} from './utils/window.util';
import {RandomUserService} from './services/random-user.service';
import {Observable} from 'rxjs';
import {User} from './models/user.model';
import {CommonModule} from '@angular/common';
import {ButtonWrapperComponent} from './components/button-wrapper/button-wrapper.component';
import {HttpClientModule} from '@angular/common/http';
import {RunInContextComponent} from './components/run-in-context/run-in-context.component';
import {StaticConverterComponent} from './components/static-converter/static-converter.component';
import {ReactiveContextComponent} from './components/reactive-context/reactive-context.component';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';

@Component({
  selector: 'angular-inject-root',
  template: `
    <nav class="nav">
      <a routerLink="/basic-inject">Basic Inject</a>
      <a routerLink="/run-in-context">Run In Context</a>
      <a routerLink="/static-converter">Static Converter</a>
      <a routerLink="/reactive-context">Reactive Context</a>
      <a routerLink="/button-wrapper">Button Wrapper</a>
    </nav>
  <router-outlet></router-outlet>`,
  styles: [`
    .nav {
      display: flex;
      gap: 10px;
    }
  `],
  standalone: true,

  imports: [
    CommonModule,
    ButtonWrapperComponent,
    HttpClientModule,
    RunInContextComponent,
    StaticConverterComponent,
    ReactiveContextComponent,
    RouterOutlet,
    RouterLinkWithHref
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
