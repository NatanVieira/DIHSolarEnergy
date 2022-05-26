import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/models/iusuario.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'dih-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public senha: string = '';
  public usuarioValido: boolean = true;
  private listaUsuarios: IUsuario[] = [];
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.devolveUsuarios().subscribe((resultado: IUsuario[]) => {this.listaUsuarios = resultado}); 
  }

  validaUsuario(){
    const usuario: IUsuario | undefined = this.listaUsuarios.find(usuario => usuario.email == this.email  && usuario.senha == this.senha);
    environment.idUsuario = usuario ? usuario.id : '0';
    environment.userName  = usuario ? usuario.user : '';
    environment.userLogado = usuario ? true : false;
    this.usuarioValido     = usuario ? true : false;
    if (usuario)
      this.router.navigate(['/dashboard']);
  }
}
