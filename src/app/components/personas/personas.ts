import { Component, OnInit } from '@angular/core';
import { Personas, Persona } from '../../services/personas';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personas',
  imports: [CommonModule, FormsModule],
  templateUrl: './personas.html',
  styleUrls: ['./personas.scss']
})

export class ListaPersonas implements OnInit {
  datos: Persona[] = [];
  cargando = true;
  verForm = false;
  nuevoRegistro = {
    fullName: '',
    address: ''
  };

  constructor(private Personas: Personas){}

  toggleForm() {
    this.verForm = !this.verForm;
  }

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

  guardarRegistro() {
    this.Personas.agregarPersona(this.nuevoRegistro).subscribe({
      next: () => {
        alert('Registro guardado');
        this.verForm = false;
        this.nuevoRegistro = { fullName: '', address: '' };
        this.ngOnInit(); // Recargar la lista de personas
      },
      error: (error) => {
        console.error('Error al guardar el registro:', error);
      }
    });
  }
}