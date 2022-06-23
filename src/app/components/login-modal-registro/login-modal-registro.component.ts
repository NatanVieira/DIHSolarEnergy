import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/models/iusuario.model';
import { SessaoLocalService } from 'src/app/services/sessao-local.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'dih-login-modal-registro',
  templateUrl: './login-modal-registro.component.html',
  styleUrls: ['./login-modal-registro.component.scss']
})
export class LoginModalRegistroComponent implements OnInit {
  novoUsuario: any = {
    email: '',
    senha: '',
    confirmacaoSenha: '',
    nomeUsuario: '',
  }

  listaUsuarios: IUsuario[] = [];
  mostrarAlerta: number = 0;

  constructor(private usuarioService: UsuarioService, private sessaoLocalService: SessaoLocalService) { }

  ngOnInit(): void {
    this.usuarioService.devolveUsuarios().subscribe((usuarios: string) => {this.listaUsuarios = JSON.parse(usuarios)});
    this.zeraInfoNovoUsuario();
    this.mostrarAlerta = this.sessaoLocalService.cadastroAtualizacao; 
    this.sessaoLocalService.zeraCadastroAtualizacao();
  }

  public cadastrarUsuario() {
    if(this.novoUsuario){
      if(this.listaUsuarios.find(usuario => usuario.email == this.novoUsuario.email)){
        this.sessaoLocalService.cadastroAtualizacao = 4;
        this.ngOnInit();
      }
      else if(this.novoUsuario.senha != this.novoUsuario.confirmacaoSenha){
        this.sessaoLocalService.cadastroAtualizacao = 6;
        this.ngOnInit();
      }
      else if (this.listaUsuarios.find(usuario => usuario.user == this.novoUsuario.nomeUsuario)){
        this.sessaoLocalService.cadastroAtualizacao = 8;
        this.ngOnInit();
      }
      else{
        let usuario: IUsuario = {
          id: '',
          email: '',
          senha: '',
          user: '',
        };
        usuario.email = this.novoUsuario.email;
        usuario.senha = this.novoUsuario.senha;
        usuario.user  = this.novoUsuario.nomeUsuario;
        this.usuarioService.cadastrarUsuario(usuario).subscribe((usuario: IUsuario) => {this.sessaoLocalService.cadastroAtualizacao = 1;
                                                                                        this.ngOnInit()},
                                                                        (error?) => {this.sessaoLocalService.cadastroAtualizacao = 2;
                                                                                      this.ngOnInit()})
      }
    }
  }

  private zeraInfoNovoUsuario() {
    this.novoUsuario.email = '';
    this.novoUsuario.senha = '';
    this.novoUsuario.confirmacaoSenha = '';
    this.novoUsuario.nomeUsuario = '';
  }

  public atualizaPagina() {
    location.reload();
  }
}
