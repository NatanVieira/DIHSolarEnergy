import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/models/iusuario.model';
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
  usuario : IUsuario = {
    id: '',
    senha: '',
    user: '',
    email: ''
  }
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.devolveUsuarios().subscribe((resultado: IUsuario[]) => {this.listaUsuarios = resultado}); 
  }

  validaUsuario(){
    const indexUsuario = this.listaUsuarios.findIndex(usuario => usuario.email == this.email && usuario.senha == this.senha);
    console.log(indexUsuario);
    if (indexUsuario != null && indexUsuario != -1)
      this.router.navigate(['/dashboard']);
    else
      this.usuarioValido = false;
  }
}
