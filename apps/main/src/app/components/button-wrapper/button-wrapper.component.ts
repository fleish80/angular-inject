import {Component, Input, OnChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonBase} from '../../models/button-base.model';

@Component({
  selector: 'angular-inject-button-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `
    disabled => {{buttonDisabled}}
    <br/>
    <button [class.disabled]="buttonDisabled">Button Wrapper</button>
    <br/>
    state => {{preventEvents.getState()}}
  `,
  styles: [
    `
      button {
        background: green;
        border-radius: 50px;
        height: 40px;
        border: 1px solid black;
      }

      button.disabled {
        background: gray;
      }
    `
  ]
})
export class ButtonWrapperComponent extends ButtonBase implements OnChanges {

  @Input() buttonDisabled: boolean;

  ngOnChanges(): void {
    this.preventEvents.shouldPrevent(this.buttonDisabled);
  }

}
