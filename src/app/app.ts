import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPersonas } from './components/personas/personas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaPersonas],
  styleUrls: ['./app.scss', './app.css'],
  template: `<app-personas></app-personas>`
})
export class App {
  protected readonly title = signal('Demo Angular');
  message = 'Hola desde Angular!';
}
