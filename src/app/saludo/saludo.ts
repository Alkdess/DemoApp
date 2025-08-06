import { Component, OnInit } from '@angular/core';
import { Demo } from '../services/demo';

@Component({
  selector: 'app-saludo',
  imports: [],
  standalone: true,
  templateUrl: './saludo.html',
  styleUrl: './saludo.scss'
})
export class Saludo implements OnInit{
  message = 'Cargando.....';

  constructor(private demo:Demo) {}

  ngOnInit() {
    this.demo.getMessage().subscribe(message => this.message = message);
  }
}
