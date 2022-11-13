import {Directive, inject, Injector, TemplateRef, ViewContainerRef} from '@angular/core';
import {NAME} from '../tokens/name.token';

@Directive({
  selector: '[angularInjectBaz]',
  standalone: true
})
export class BazDirective {

  private vcr = inject(ViewContainerRef);
  private tpl = inject(TemplateRef<any>);

  ngOnInit() {
    this.vcr.createEmbeddedView(this.tpl, {}, {
      injector: Injector.create({
        providers: [{ provide: NAME, useValue: '😝' }]
      })
    })
  }

}
