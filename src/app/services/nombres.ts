import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ListNombres {
  private apiUrl = 'https://localhost:7279/api/Nombres';
  constructor(private http: HttpClient) { }
  getNombres():Observable<string[]>{
    return this.http.get<string[]>(this.apiUrl);
  }
}
