import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/iusuario.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  cEntidade: string = environment.URL_API_REST + 'usuarios';
  constructor(private http: HttpClient) { }

  devolveUsuarios(): Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(this.cEntidade);
  }
}
