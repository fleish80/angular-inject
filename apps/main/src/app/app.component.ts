import {Component, Inject} from '@angular/core';
import {WINDOW} from './tokens/window.token';

@Component({
  selector: 'angular-inject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'main';

  constructor(@Inject(WINDOW) private window: Window) {
    console.log(window);
  }

}
