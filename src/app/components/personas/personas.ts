import { Component, OnInit } from '@angular/core';
import { Personas, Persona } from '../../services/personas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personas',
  imports: [CommonModule],
  templateUrl: './personas.html',
  styleUrls: ['./personas.scss']
})

export class ListaPersonas implements OnInit {
  datos: Persona[] = [];
  cargando = true;
  
  constructor(private Personas: Personas){}

  ngOnInit() : void {
    this.Personas.getPersonas().subscribe({
      next: (res) => {
        this.datos = res;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar las personas:', error);
        this.cargando = false;
      }
    });
  }
}
