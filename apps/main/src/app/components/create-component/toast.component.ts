import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'df-standalone-toast',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>{{text}}</p> `,
  styles: [],
})
export class ToastComponent {

  @Input() text!: string;

}
