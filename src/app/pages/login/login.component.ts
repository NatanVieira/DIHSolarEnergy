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
  email: string = '';
  senha: string = '';
  usuarioValido: boolean = true;
  listaUsuarios: IUsuario[] = [];
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.devolveUsuarios().subscribe((resultado: IUsuario[]) => {this.listaUsuarios = resultado}); 
  }

  validaUsuario(){
    const indexUsuario = this.listaUsuarios.findIndex(usuario => usuario.email == this.email && usuario.senha == this.senha);
    if (indexUsuario != null && indexUsuario != -1){
      environment.idUsuario = this.listaUsuarios[indexUsuario].id;
      environment.userName  = this.listaUsuarios[indexUsuario].user;
      environment.userLogado = true;
      this.router.navigate(['/dashboard']);
    }
    else
      this.usuarioValido = false;
  }
}
