import { Injectable } from '@angular/core';
import { of, Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Demo {
  constructor() { }

  getMessage(): Observable<string>{
    return of('Mensaje simulado desde el backend').pipe(delay(2000));
  }  
}
