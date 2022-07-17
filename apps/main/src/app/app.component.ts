import {Component} from '@angular/core';
import {getWindow} from './utils/window.util';

@Component({
  selector: 'angular-inject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'main';

  window: Window;

  constructor() {
    console.log(window);
  }

  getWindow() {
    this.window = getWindow();
    console.log(this.window);
  }

}
