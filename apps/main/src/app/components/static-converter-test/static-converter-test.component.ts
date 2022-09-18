import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'angular-inject-static-converter-test',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{name}}
    </p>
  `,
  styles: [
  ]
})
export class StaticConverterTestComponent {

  @Input() name: string;

}
