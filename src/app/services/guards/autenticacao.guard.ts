import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
  constructor(private router: Router, private usuarioService: UsuarioService){}

  canActivate (){
    if(!this.usuarioService.userLogado){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
