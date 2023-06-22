import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {ButtonWrapperTestComponent} from './button-wrapper-test.component';

@Component({
  selector: 'angular-inject-button-wrapper',
  standalone: true,
  imports: [ButtonWrapperTestComponent, NgIf],
  template: `

    <button (click)="buttonWrapperDisabled = !buttonWrapperDisabled">Toggle disabled</button>
    <button (click)="buttonWrapperDisplay= !buttonWrapperDisplay">Toggle display</button>

    <angular-inject-button-wrapper-test *ngIf="buttonWrapperDisplay"
                                        [buttonDisabled]="buttonWrapperDisabled"></angular-inject-button-wrapper-test>
  `,
  styles: [
    `
    `
  ]
})
export class ButtonWrapperComponent {

  buttonWrapperDisabled = false;
  buttonWrapperDisplay = true;

}
