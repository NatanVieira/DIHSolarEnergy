import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnidade } from '../models/iunidade.model';
@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  constructor(private http: HttpClient) { }

  devolveUnidades(idUsuario: string): Observable<IUnidade[]>{
    return this.http.get<IUnidade[]>('http://localhost:3000/unidades?idUsuario=' + idUsuario);
  }
}
