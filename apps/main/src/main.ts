import {enableProdMode, ENVIRONMENT_INITIALIZER, inject} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {NoPreloading, provideRouter, Routes, withPreloading} from '@angular/router';
import {SwitcherService} from './app/services/switcher.service';
import { NAME } from './app/tokens/name.token';
import { CanMatchService } from './app/services/can-match.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic-inject',
    pathMatch: 'full'
  },
  {
    path: 'reactive-context',
    loadComponent: () => import('./app/components/reactive-context/reactive-context.component').then(c => c.ReactiveContextComponent)
  },
  {
    path: 'run-in-context',
    loadComponent: () => import('./app/components/run-in-context/run-in-context.component').then(c => c.RunInContextComponent)
  },
  {
    path: 'static-converter',
    loadComponent: () => import('./app/components/static-converter/static-converter.component').then(c => c.StaticConverterComponent)
  },
  {
    path: 'basic-inject',
    loadComponent: () => import('./app/components/basic-inject/basic-inject.component').then(c => c.BasicInjectComponent)
  },
  {
    path: 'button-wrapper',
    loadComponent: () => import('./app/components/button-wrapper/button-wrapper.component').then(c => c.ButtonWrapperComponent),
    providers: [
      {
        provide: ENVIRONMENT_INITIALIZER,
        multi: true,
        useValue() {
          inject(SwitcherService).init();
        },
      },
    ],
  },
  {
    path: 'embedded-view-injector',
    loadComponent: () => import('./app/components/embedded-view-inject/embedded-view-inject.component').then(c => c.EmbeddedViewInjectComponent)
  },
  {
    path: 'create-component',
    loadComponent: () => import('./app/components/create-component/create-component.component').then(c => c.CreateComponentComponent)
  },
  {
    path: 'type-inference',
    loadComponent: () => import('./app/components/type-inference/type-inference.component').then(c => c.TypeInferenceComponent),
    providers: [{ provide: NAME, useValue: '🎁' }],
  },
  {
    path: 'can-match',
    loadComponent: () => import('./app/components/can-match/can-match-one.component').then(c => c.CanMatchOneComponent),
    canMatch: [() => inject(CanMatchService).match()]
  },
  {
    path: 'can-match',
    loadComponent: () => import('./app/components/can-match/can-match-two.component').then(c => c.CanMatchTwoComponent),
  },

];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes,
      withPreloading(NoPreloading)
    )]
});

