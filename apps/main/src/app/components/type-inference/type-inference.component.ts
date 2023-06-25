import { Component, Inject, inject } from '@angular/core';
import { NAME } from '../../tokens/name.token';

@Component({
  selector: 'df-type-inference',
  standalone: true,
  imports: [],
  template: `
  <p>name: {{name}}</p>
  <p>nameInConstructor: {{nameInConstructor}}</p>

  `,
  styles: [],
})
export class TypeInferenceComponent {


  // type is set automatically
  name = inject(NAME);
  
  // you need to set type by yourself
  constructor(@Inject(NAME) public nameInConstructor: string) {

  }


}
