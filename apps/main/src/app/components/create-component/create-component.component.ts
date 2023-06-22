import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'angular-inject-create-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="openToast()">Open toast</button>`,
  styles: [],
})
export class CreateComponentComponent {

  toastService = inject(ToastService);

  openToast() {
    this.toastService.open('toast text');
  }
}
