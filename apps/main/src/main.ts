import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {NoPreloading, provideRouter, Routes, withPreloading} from '@angular/router';

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
    loadComponent: () => import('./app/components/button-wrapper/button-wrapper.component').then(c => c.ButtonWrapperComponent)
  },
  {
    path: 'embedded-view-injector',
    loadComponent: () => import('./app/components/embedded-view-inject/embedded-view-inject.component').then(c => c.EmbeddedViewInjectComponent)
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

