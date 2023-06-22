import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NAME} from '../../tokens/name.token';

@Component({
  selector: 'angular-inject-embedded-view-inject-baz',
  standalone: true,
  imports: [CommonModule],
  template: `{{name}}`,
  styles: [],
})
export class EmbeddedViewInjectBazComponent {

  name = inject(NAME);

}
