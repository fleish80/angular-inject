import { Component, inject } from '@angular/core';
import { NAME } from '../../tokens/name.token';

@Component({
  selector: 'df-embedded-view-inject-baz',
  standalone: true,
  imports: [],
  template: `{{name}}`,
  styles: [],
})
export class EmbeddedViewInjectBazComponent {

  name = inject(NAME);

}
