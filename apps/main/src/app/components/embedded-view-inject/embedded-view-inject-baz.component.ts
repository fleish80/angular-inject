import { Component, Inject, inject } from '@angular/core';
import { NAME } from '../../tokens/name.token';

@Component({
  selector: 'df-embedded-view-inject-baz',
  standalone: true,
  imports: [],
  template: `{{name}}`,
  styles: [],
})
export class EmbeddedViewInjectBazComponent {

  // type is set automatically
  name = inject(NAME);
  
  // you need to set type by yourself
  constructor(@Inject(NAME) private nameInContrctor: string) {

  }

}
