import {inject, InjectionToken, PLATFORM_ID} from '@angular/core';

export const WINDOW = new InjectionToken('global window object', {
  factory: () => {
    const platform = inject(PLATFORM_ID);
    return platform === 'browser' ? window : {} as Window;
  }
})
