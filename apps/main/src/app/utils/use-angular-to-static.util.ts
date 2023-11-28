import { inject, Type, ViewContainerRef } from '@angular/core';

type ComponentProps = {[key: string]: string};

export function useAngularToStatic<C extends NonNullable<unknown>>(component: Type<C>) : (inputs?: ComponentProps) => string {
  const vcr = inject(ViewContainerRef);

  return (inputs?: ComponentProps): string => {
    const componentRef = vcr.createComponent<C>(component);
    if (inputs) {
      Object.entries(inputs).forEach(([key, value]) => {
        componentRef.setInput(key, value);
      });
      componentRef.changeDetectorRef.detectChanges();
    }
    // const innerHTML: string = (componentRef.hostView as EmbeddedViewRef<C>).rootNodes[0].innerHTML;
    const innerHTML: string = componentRef.location.nativeElement.innerHTML;
    componentRef.destroy();
    return innerHTML;
  }
}
