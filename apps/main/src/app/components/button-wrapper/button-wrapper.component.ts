import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {ButtonWrapperTestComponent} from './button-wrapper-test.component';

@Component({
  selector: 'df-button-wrapper',
  standalone: true,
  imports: [ButtonWrapperTestComponent, NgIf],
  template: `

    <button (click)="buttonWrapperDisabled = !buttonWrapperDisabled">Toggle disabled</button>
    <button (click)="buttonWrapperDisplay= !buttonWrapperDisplay">Toggle display</button>

    <df-button-wrapper-test *ngIf="buttonWrapperDisplay"
                                        [buttonDisabled]="buttonWrapperDisabled"/>
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
