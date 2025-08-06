import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig:ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

