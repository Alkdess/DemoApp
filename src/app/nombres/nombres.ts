import { Component, OnInit } from '@angular/core';
import { ListNombres } from '../services/nombres';
import { CommonModule  } from '@angular/common';


@Component({
  selector: 'app-nombres',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './nombres.html',
  styleUrls: ['./nombres.scss']
})

export class Nombres implements OnInit {
  nombres: string[] = [];

  constructor(private listNombres: ListNombres) {}

  ngOnInit(): void {
    this.listNombres.getNombres().subscribe(data => {
      this.nombres = data;
    });
  }
}
