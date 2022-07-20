import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SessaoLocalService {
  modo: string = 'claro';
  fonteFam: string = 'Mustica';
  bgColor: string = '#EC6200';
  fgColor: string = 'black';
  cadastroAtualizacao: number = 0; // 0 não faz nada, 1 Sucesso, 2 Falha
  URL_API_REST: string = 'https://fakedbtopersonalapps.herokuapp.com/';  //'http://localhost:3000/'
  
  constructor() { }

  public zeraCadastroAtualizacao():void {
    setTimeout(() => {this.cadastroAtualizacao = 0}, 3000);
  }

  public mudarTema(){
    this.modo = this.modo === 'claro' ? 'escuro' : 'claro';
  }
}
