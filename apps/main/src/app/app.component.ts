import {Component} from '@angular/core';
import {getWindow} from './utils/window.util';

@Component({
  selector: 'angular-inject-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'main';

  window = getWindow();

  constructor() {
    console.log(window);
  }

}
