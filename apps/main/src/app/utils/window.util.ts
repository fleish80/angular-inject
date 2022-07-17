import {inject} from '@angular/core';
import {WINDOW} from '../tokens/window.token';

export const getWindow = (): Window => {
  return inject(WINDOW);
}
