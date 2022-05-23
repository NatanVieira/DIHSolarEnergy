import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/iusuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  devolveUsuarios(): Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>('http://localhost:3000/usuarios');
  }
}
