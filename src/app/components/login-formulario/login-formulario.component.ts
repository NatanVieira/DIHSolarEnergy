import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/models/iusuario.model';
import { SessaoLocalService } from 'src/app/services/sessao-local.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'dih-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.scss']
})
export class LoginFormularioComponent implements OnInit {
  public email: string = '';
  public senha: string = '';
  public usuarioValido: boolean = true;
  private listaUsuarios: IUsuario[] = [];
  public mostraAlerta: number = 0;
  constructor(private usuarioService: UsuarioService, private router: Router, private sessaoLocalService: SessaoLocalService) { }

  ngOnInit(): void {
    this.usuarioService.devolveUsuarios().subscribe((usuarios: IUsuario[]) => {this.listaUsuarios = usuarios});
    this.mostraAlerta = this.sessaoLocalService.cadastroAtualizacao;
    this.sessaoLocalService.zeraCadastroAtualizacao();
  }
  
  public validaUsuario(){
    const usuario: IUsuario | undefined = this.listaUsuarios.find(usuario => usuario.email == this.email  && atob(usuario.senha) == this.senha);
    this.usuarioService.idUsuarioLogado = usuario ? usuario.id : '';
    this.usuarioService.userNameLogado  = usuario ? usuario.user : '';
    this.usuarioService.userLogado      = usuario ? true : false;
    this.usuarioValido     = usuario ? true : false;
    if (usuario){
      this.usuarioService.salvaIDUsuarioLocalStorage();
      this.router.navigate(['/dashboard']);
    }
  }
}
