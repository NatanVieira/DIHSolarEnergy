import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IUsuario } from '../models/iusuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private cEntidade: string = environment.URL_API_REST + 'usuarios';
  constructor(private http: HttpClient) { }

  public devolveUsuarios(): Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(this.cEntidade);
  }
}
