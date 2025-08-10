import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { catchError } from 'rxjs';
import { Observable, of } from 'rxjs';

export interface Persona {
  id: number;
  fullName: string;
  address: string;
  update_Date: string;
}

@Injectable({
  providedIn: 'root'
})

export class Personas {
  private apiUrl = 'https://localhost:7279/api/Nombres';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  agregarPersona(nuevaPersona: Partial<Persona>) {
    return this.http.post(this.apiUrl, nuevaPersona);
  }
}
