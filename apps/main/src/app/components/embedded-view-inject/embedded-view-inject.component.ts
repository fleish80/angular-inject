import { Component, Injector } from '@angular/core';
import { BazDirective } from '../../directives/baz.directive';
import { EmbeddedViewInjectBazComponent } from './embedded-view-inject-baz.component';
import { NAME } from '../../tokens/name.token';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'df-embedded-view-inject',
  standalone: true,
  imports: [BazDirective, EmbeddedViewInjectBazComponent, NgTemplateOutlet],
  template: `
    <!--    Before-->
    <ng-container [ngTemplateOutlet]="tpl" [ngTemplateOutletInjector]="injector"/>
    <ng-template #tpl>
      <df-embedded-view-inject-baz/>
    </ng-template>


    <!--    After-->
    <ng-container *dfInjectBaz>
      <df-embedded-view-inject-baz/>
    </ng-container>
  `,
  styles: [],
})
export class EmbeddedViewInjectComponent {
  injector = Injector.create({
    providers: [{ provide: NAME, useValue: '🎁' }],
  });
}
