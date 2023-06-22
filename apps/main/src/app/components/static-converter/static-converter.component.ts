import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UseAngularToStatic} from 'apps/main/src/app/utils/use-angular-to-static.util';
import {
  StaticConverterTestComponent
} from './static-converter-test.component';

@Component({
  selector: 'angular-inject-static-converter',
  standalone: true,
  imports: [],
  template: `
    {{innerHTML}}
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticConverterComponent implements OnInit {

  useAngularToStatic = UseAngularToStatic(StaticConverterTestComponent);
  innerHTML: string;

  constructor() {
  }

  ngOnInit(): void {
    this.innerHTML = this.useAngularToStatic({name: 'ItonHof'});
  }

}
