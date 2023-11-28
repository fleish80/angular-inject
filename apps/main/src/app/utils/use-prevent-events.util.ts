import {ChangeDetectorRef, ElementRef, inject, NgZone, ViewRef} from '@angular/core';

export const usePreventEvents = () => {
  const changeDetector = inject(ChangeDetectorRef);
  const ngZone = inject(NgZone);
  const el = inject(ElementRef);
  let disabled = false;

  ngZone.runOutsideAngular(() => {
    el.nativeElement.addEventListener('click', (e: Event) => {
      console.log('clicked');
      _haltDisabledEvents(e, disabled);
    });
  });

  (changeDetector as ViewRef).onDestroy(() => {
    console.log('destroy');
    el.nativeElement.removeEventListener('click', (e: Event) => {
      _haltDisabledEvents(e, disabled);
    });
  });

  return {
    shouldPrevent: (_disabled: boolean): void => {
      disabled = _disabled
    },
    getState: (): boolean => disabled
  }
}

const _haltDisabledEvents = (event: Event, disabled: boolean): void => {
  console.log('_haltDisabledEvents disabled = ', disabled);
  if (disabled) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
};
