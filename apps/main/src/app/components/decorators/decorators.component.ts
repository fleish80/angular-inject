import { Component, Inject, Optional, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAME } from '../../tokens/name.token';

@Component({
  selector: 'df-decorators',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>name: {{name}}</p>
  <p>nameInConstructor: {{nameInConstructor}}</p>
  `,
  styles: [],
})
export class DecoratorsComponent {

  name = inject(NAME, {optional: true});

  constructor(@Inject(NAME) @Optional() public nameInConstructor: string) {

  }


}
