import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nombres } from './nombres/nombres';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nombres],
  styleUrls: ['./app.scss'],
  template: `<app-nombres></app-nombres>`
})
export class App {
  protected readonly title = signal('Demo Angular');
  message = 'Hola desde Angular!';
}
