import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { ChangeDetectorRef, inject, ViewRef } from '@angular/core';

export function useReactiveContext<T>(streams$?: Observable<T>) {
  const changeDetector = inject(ChangeDetectorRef);
  const unsubscribe$ = new Subject<void>();
  let innerStream$: Observable<T> | undefined;

  if (streams$) {
    innerStream$ = streams$.pipe(takeUntil(unsubscribe$));
  }

  (changeDetector as ViewRef).onDestroy(() => {
    console.log('unsubscribe');
    unsubscribe$.next();
    unsubscribe$.complete();
  });

  return {
    connect: (streams$: Observable<T>) => streams$.pipe(takeUntil(unsubscribe$)),
    subscribe(next?: (value: T) => void, error?: (e: any) => void, complete?: () => void): Subscription | null {
      let subscription: Subscription | null = null;
      if (innerStream$) {
        subscription = innerStream$
          .pipe(takeUntil(unsubscribe$))
          .subscribe({ next, error, complete });
      }
      return subscription;
    },
    subscribeAndRender(next?: (value: T) => void, error?: (e: any) => void, complete?: () => void): Subscription | null {
      let subscription: Subscription | null = null;
      if (innerStream$) {
        subscription = innerStream$
          .pipe(takeUntil(unsubscribe$))
          .subscribe({
            next: (v) => {
              if (next) {
                next(v);
                changeDetector.detectChanges();
              }
            },
            error,
            complete
          });
      }
      return subscription;
    },
  }

}
