import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/iusuario.model';
import { SessaoLocalService } from './sessao-local.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private cEntidade: string = ''; //environment.URL_API_REST + 'usuarios';
  public idUsuarioLogado: string = '';
  public userLogado: boolean = false;
  public userNameLogado: string = '';
  
  constructor(private http: HttpClient, private sessaoLocalService: SessaoLocalService) {
    this.cEntidade = this.sessaoLocalService.URL_API_REST + 'usuarios';
   }

  public devolveUsuarios(): Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(this.cEntidade);
  }
}
