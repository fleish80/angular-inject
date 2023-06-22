import {Directive, inject, Injector, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {NAME} from '../tokens/name.token';

@Directive({
  selector: '[dfInjectBaz]',
  standalone: true
})
export class BazDirective implements OnInit {

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
