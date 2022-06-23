import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/iusuario.model';
import { SessaoLocalService } from './sessao-local.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private cEntidade: string = ''; //environment.URL_API_REST + 'usuarios';
  private USERID_LS: string = 'DSE_USERID';
  public idUsuarioLogado: any = '';
  public userLogado: boolean = false;
  public userNameLogado: string = '';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    })
  };
  constructor(private http: HttpClient, private sessaoLocalService: SessaoLocalService) {
    this.cEntidade = this.sessaoLocalService.URL_API_REST + 'usuarios';

   }

  public devolveUsuarios(): Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(this.cEntidade,this.httpOptions);
  }

  public salvaIDUsuarioLocalStorage(): void {
    localStorage.setItem(this.USERID_LS,this.idUsuarioLogado);
  }
  public apagaIDUsuarioLocalStorage(): void {
    localStorage.setItem(this.USERID_LS, '');
  }

  public atualizaIDUsuario() {
    this.idUsuarioLogado = localStorage.getItem(this.USERID_LS);
    this.idUsuarioLogado = this.idUsuarioLogado != undefined && this.idUsuarioLogado != null ? this.idUsuarioLogado : '';
    this.userLogado = this.idUsuarioLogado !== '' ? true: false;
  }

  public cadastrarUsuario(usuario: IUsuario) {
    usuario.id = this.geraIDUsuario();
    usuario.senha = btoa(usuario.senha);
    return this.http.post<IUsuario>(this.cEntidade, usuario);
  }

  private geraIDUsuario(): string {
    return String(Math.round((Math.random() * (9999999999 - 1)) + 1));
  }

  public zeraInfoUsuarioLogado(){
    this.idUsuarioLogado = '';
    this.userNameLogado = '';
    this.userLogado = false;
  }
}
