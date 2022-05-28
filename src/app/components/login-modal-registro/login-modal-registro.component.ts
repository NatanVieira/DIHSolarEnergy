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
    this.usuarioService.devolveUsuarios().subscribe((usuarios: IUsuario[]) => {this.listaUsuarios = usuarios});
    this.zeraInfoNovoUsuario();
    this.mostrarAlerta = this.sessaoLocalService.cadastroAtualizacao; 
    this.sessaoLocalService.zeraCadastroAtualizacao();
  }

  cadastrarUsuario() {
    if(this.novoUsuario){
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

  private zeraInfoNovoUsuario() {
    this.novoUsuario.email = '';
    this.novoUsuario.senha = '';
    this.novoUsuario.confirmacaoSenha = '';
    this.novoUsuario.nomeUsuario = '';
  }
}
