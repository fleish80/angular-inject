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
    loadComponent: () => import('./app/components/reactive-context/reactive-context.component').then(m => m.ReactiveContextComponent)
  },
  {
    path: 'run-in-context',
    loadComponent: () => import('./app/components/run-in-context/run-in-context.component').then(m => m.RunInContextComponent)
  },
  {
    path: 'static-converter',
    loadComponent: () => import('./app/components/static-converter/static-converter.component').then(m => m.StaticConverterComponent)
  },
  {
    path: 'basic-inject',
    loadComponent: () => import('./app/components/basic-inject/basic-inject.component').then(m => m.BasicInjectComponent)
  },
  {
    path: 'button-wrapper',
    loadComponent: () => import('./app/components/button-wrapper/button-wrapper.component').then(m => m.ButtonWrapperComponent)
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

