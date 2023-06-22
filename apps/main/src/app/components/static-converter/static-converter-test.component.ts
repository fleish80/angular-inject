import { Component, Input } from '@angular/core';

@Component({
  selector: 'df-static-converter-test',
  standalone: true,
  imports: [],
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
