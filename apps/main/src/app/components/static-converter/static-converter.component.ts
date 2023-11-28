import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { useAngularToStatic } from '../../utils/use-angular-to-static.util';
import { StaticConverterTestComponent } from './static-converter-test.component';

@Component({
  selector: 'df-static-converter',
  standalone: true,
  imports: [],
  template: `
    {{innerHTML}}
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticConverterComponent implements OnInit {

  useAngularToStatic = useAngularToStatic(StaticConverterTestComponent);
  innerHTML: string;

  ngOnInit(): void {
    this.innerHTML = this.useAngularToStatic({ name: 'ItonHof' });
  }

}
