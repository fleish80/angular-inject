import {Component, EnvironmentInjector} from '@angular/core';
import {CommonModule} from '@angular/common';
import {getWindow} from 'apps/main/src/app/utils/window.util';

@Component({
  selector: 'angular-inject-run-in-context',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="printWindow()">Print Window</button>
  `,
  styles: [
  ]
})
export class RunInContextComponent  {

  constructor(private environmentInjector: EnvironmentInjector) {
  }

  printWindow() {
    this.environmentInjector.runInContext(() => {
      console.log(getWindow());
    });
  }
}
